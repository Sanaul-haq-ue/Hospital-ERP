<?php

namespace App\Http\Controllers\hr;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\hr\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class EmployeeController extends Controller
{

    private function checkPermission(User $user, string $permission): void
    {
        if ($user->role_id === 1) {
            return;
        }

        $hasPermission = $user->role
            && $user->role->permissions()
                ->where('name', $permission)
                ->exists();

        if (!$hasPermission) {
            abort(403, 'You do not have permission to perform this action.');
        }
    }

    public function index(Request $request)
    {
        $this->checkPermission($request->user(), 'employee.view');

        return Employee::with([
            'department:id,parent_id,department_code,name',
            'department.parent:id,parent_id,department_code,name',
            'department.parent.parent:id,parent_id,department_code,name',
            'department.parent.parent.parent:id,parent_id,department_code,name',
            'shift:id,shift_name,is_active',
            'educations',
            'experiences',
        ])
            ->latest()
            ->get();
    }

    public function store(Request $request)
    {
        $this->checkPermission($request->user(), 'employee.create');

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'gender' => 'required|in:male,female,other',
            'date_of_birth' => 'nullable|date',
            'phone' => 'required|string|size:11|unique:employees,phone|regex:/^01[3-9]\d{8}$/',
            'email' => 'required|email|max:255|unique:employees,email',
            'address' => 'nullable|string|max:1000',

            'city' => 'nullable|string|max:100',
            'district' => 'nullable|string|max:100',
            'zip_code' => 'nullable|string|max:20',
            'bio' => 'nullable|string|max:5000',
            'is_doctor' => 'nullable|boolean',

            'dept_id' => ['required', 'integer', Rule::exists('depts', 'id')->where('is_active', 1)],
            'shift_id' => ['required', 'integer', Rule::exists('shifts', 'id')->where('is_active', 1)->whereNull('deleted_at')],
            'designation' => 'required|string|max:150',
            'qualification' => 'nullable|string|max:255',
            'experience_years' => 'required|integer|min:0|max:100',
            'license_number' => 'nullable|string|max:100',
            'previous_workplace' => 'nullable|string|max:255',
            'memberships' => 'nullable|string|max:2000',

            'profile_photo' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'cv_document' => 'nullable|file|mimes:pdf|max:100',
            'nid_document' => 'nullable|file|mimes:pdf|max:100',
            'other_document' => 'nullable|file|mimes:pdf|max:100',

            'education' => 'nullable|array',
            'education.*.degree' => 'nullable|string|max:255',
            'education.*.institution' => 'nullable|string|max:255',
            'education.*.year' => 'nullable|string|max:10',
            'education.*.description' => 'nullable|string|max:2000',

            'experience' => 'nullable|array',
            'experience.*.workplace' => 'nullable|string|max:255',
            'experience.*.position' => 'nullable|string|max:255',
            'experience.*.start_date' => 'nullable|date',
            'experience.*.end_date' => 'nullable|date',
            'experience.*.currently_working' => 'nullable|boolean',

        ]);

        $employee = DB::transaction(function () use ($request, $validated) {
            $employeeData = collect($validated)->except([
                'education', 'experience',
                'profile_photo', 'cv_document', 'nid_document', 'other_document',
            ])->all();
            // The existing employees table stores this field as full_name.
            $employeeData['full_name'] = $employeeData['name'];
            unset($employeeData['name']);
            $employeeData['created_by'] = $request->user()->id;
            $employeeData['is_doctor'] = $employeeData['is_doctor'] ?? 0;
            // employee_code is NOT NULL, so provide a unique temporary value for INSERT.
            $employeeData['employee_code'] = 'EMP-TMP-' . Str::uuid();
            $employee = Employee::create($employeeData);
            $employee->employee_code = 'EMP-' . str_pad((string) $employee->id, 6, '0', STR_PAD_LEFT);

            foreach ([
                'profile_photo' => 'profile_photo_path',
                'cv_document' => 'cv_path',
                'nid_document' => 'nid_path',
                'other_document' => 'other_document_path',
            ] as $input => $column) {
                if ($request->hasFile($input)) {
                    $file = $request->file($input);
                    $directory = $input === 'profile_photo'
                        ? public_path('assets/user/img')
                        : public_path('assets/user/document');
                    File::ensureDirectoryExists($directory);

                    $prefix = $input === 'profile_photo' ? 'emp-profile_photo' : 'emp-' . $input;
                    $extension = strtolower($file->getClientOriginalExtension());
                    do {
                        $randomNumber = random_int(100000000, 999999999);
                        $fileName = $prefix . '-' . $employee->employee_code . '-' . $randomNumber . '.' . $extension;
                    } while (File::exists($directory . DIRECTORY_SEPARATOR . $fileName));

                    $file->move($directory, $fileName);
                    $employee->{$column} = $fileName;
                }
            }
            $employee->save();

            foreach ($validated['education'] ?? [] as $row) {
                if (collect($row)->filter(fn ($value) => filled($value))->isNotEmpty()) {
                    $employee->educations()->create($row);
                }
            }
            foreach ($validated['experience'] ?? [] as $row) {
                // The hidden checkbox fallback sends 0 even when the row is empty.
                if (collect($row)->except('currently_working')->filter(fn ($value) => filled($value))->isNotEmpty()) {
                    $employee->experiences()->create($row);
                }
            }
            return $employee->load(['educations', 'experiences']);
        });

        return response()->json([
            'success' => true,
            'message' => 'Employee saved successfully.',
            'employee' => $employee,
        ], 201);
    }

    public function update(Request $request, int $id)
    {
        $this->checkPermission($request->user(), 'employee.edit');
        $employee = Employee::findOrFail($id);
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'gender' => 'required|in:male,female,other',
            'date_of_birth' => 'nullable|date',
            'phone' => ['required','string','size:11','regex:/^01[3-9]\\d{8}$/',Rule::unique('employees','phone')->ignore($id)],
            'email' => ['required','email','max:255',Rule::unique('employees','email')->ignore($id)],
            'address' => 'nullable|string|max:1000',

            'city' => 'nullable|string|max:100',
            'district' => 'nullable|string|max:100',
            'zip_code' => 'nullable|string|max:20',
            'bio' => 'nullable|string|max:5000',
            'is_doctor' => 'nullable|boolean',

            'dept_id' => ['required','integer',Rule::exists('depts','id')->where('is_active',1)],
            'shift_id' => ['required','integer',Rule::exists('shifts','id')->whereNull('deleted_at')],
            'designation' => 'required|string|max:150',
            'qualification' => 'nullable|string|max:255',
            'experience_years' => 'required|integer|min:0|max:100',
            'license_number' => 'nullable|string|max:100',
            'previous_workplace' => 'nullable|string|max:255',
            'memberships' => 'nullable|string|max:2000',

            'profile_photo' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'cv_document' => 'nullable|file|mimes:pdf|max:100',
            'nid_document' => 'nullable|file|mimes:pdf|max:100',
            'other_document' => 'nullable|file|mimes:pdf|max:100',
            'education' => 'nullable|array','education.*.degree' => 'nullable|string|max:255','education.*.institution' => 'nullable|string|max:255','education.*.year' => 'nullable|string|max:10','education.*.description' => 'nullable|string|max:2000',
            'experience' => 'nullable|array','experience.*.workplace' => 'nullable|string|max:255','experience.*.position' => 'nullable|string|max:255','experience.*.start_date' => 'nullable|date','experience.*.end_date' => 'nullable|date','experience.*.currently_working' => 'nullable|boolean',
        ]);
        $replacedFiles = [];
        $validated['is_doctor'] = $validated['is_doctor'] ?? 0;
        DB::transaction(function () use ($request, $validated, $employee, &$replacedFiles) {
            $employee->fill(collect($validated)->except([
                'name', 'education', 'experience',
                'profile_photo', 'cv_document', 'nid_document', 'other_document',
            ])->all());
            $employee->full_name = $validated['name'];
            $employee->edited_by = $request->user()->id;
            $employee->edited_at = now();

            foreach ([
                'profile_photo' => ['column' => 'profile_photo_path', 'directory' => 'assets/user/img', 'prefix' => 'emp-profile_photo'],
                'cv_document' => ['column' => 'cv_path', 'directory' => 'assets/user/document', 'prefix' => 'emp-cv_document'],
                'nid_document' => ['column' => 'nid_path', 'directory' => 'assets/user/document', 'prefix' => 'emp-nid_document'],
                'other_document' => ['column' => 'other_document_path', 'directory' => 'assets/user/document', 'prefix' => 'emp-other_document'],
            ] as $input => $fileConfig) {
                if (!$request->hasFile($input)) {
                    continue;
                }

                $file = $request->file($input);
                $directory = public_path($fileConfig['directory']);
                File::ensureDirectoryExists($directory);
                $extension = strtolower($file->getClientOriginalExtension());
                do {
                    $filename = $fileConfig['prefix'] . '-' . $employee->employee_code . '-' . random_int(100000000, 999999999) . '.' . $extension;
                } while (File::exists($directory . DIRECTORY_SEPARATOR . $filename));

                $file->move($directory, $filename);
                if ($employee->{$fileConfig['column']}) {
                    $replacedFiles[] = [$directory, basename($employee->{$fileConfig['column']})];
                }
                $employee->{$fileConfig['column']} = $filename;
            }
            $employee->save();
            if (array_key_exists('education', $validated)) {
                $employee->educations()->delete();
                foreach ($validated['education'] as $row) {
                    if (collect($row)->filter(fn ($value) => filled($value))->isNotEmpty()) {
                        $employee->educations()->create($row);
                    }
                }
            }
            if (array_key_exists('experience', $validated)) {
                $employee->experiences()->delete();
                foreach ($validated['experience'] as $row) {
                    // Ignore currently_working when deciding whether this row has data.
                    if (collect($row)->except('currently_working')->filter(fn ($value) => filled($value))->isNotEmpty()) {
                        $employee->experiences()->create($row);
                    }
                }
            }
        });

        foreach ($replacedFiles as [$directory, $filename]) {
            $oldFile = $directory . DIRECTORY_SEPARATOR . $filename;
            if (File::exists($oldFile)) {
                File::delete($oldFile);
            }
        }

        return response()->json(['success' => true, 'message' => 'Employee updated successfully.']);
    }

    public function destroy(Request $request, int $id)
    {
        $this->checkPermission($request->user(), 'employee.delete');

        $employee = Employee::findOrFail($id);
        $employee->deleted_by = $request->user()->id;
        $employee->save();
        $employee->delete();

        return response()->json([
            'success' => true,
            'message' => 'Employee deleted successfully.',
        ]);
    }
}
