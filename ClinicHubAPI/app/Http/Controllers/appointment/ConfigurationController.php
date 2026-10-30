<?php

namespace App\Http\Controllers\appointment;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\appointment\Configuration;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ConfigurationController extends Controller
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

        abort_unless($hasPermission, 403, 'You do not have permission to perform this action.');
    }

    public function index(Request $request)
    {
        $this->checkPermission($request->user(), 'dac.view');

        return Configuration::query()
            ->with([
                'doctor:id,full_name,designation',
                'appointmentType:id,name',
            ])
            ->latest()
            ->get();
    }

    public function store(Request $request)
    {
        $this->checkPermission($request->user(), 'dac.create');

        $validator = Validator::make($request->all(), [
            'doctor_id' => [
                'required',
                'integer',
                Rule::exists('employees', 'id')
                    ->where(fn ($query) => $query->where('is_doctor', true)->whereNull('deleted_at')),
                Rule::unique('configurations', 'doctor_id')
                    ->where('appointment_type_id', $request->input('appointment_type_id')),
            ],
            'appointment_type_id' => ['required', 'integer', Rule::exists('appointment_types', 'id')],
            'duration' => ['required', 'integer', 'min:5', 'max:180', 'multiple_of:5'],
            'price' => ['required', 'numeric', 'min:0', 'max:99999999.99', 'regex:/^\d+(\.\d{1,2})?$/'],
            'status' => ['required', 'boolean'],
            'notes' => ['nullable', 'string', 'max:5000'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'The given data was invalid.',
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            $configuration = DB::transaction(
                fn () => Configuration::create($validator->validated())
            );
        } catch (QueryException $exception) {
            if ($this->isUniqueConstraintViolation($exception)) {
                return response()->json([
                    'success' => false,
                    'message' => 'A configuration already exists for this doctor and appointment type.',
                    'errors' => [
                        'appointment_type_id' => ['A configuration already exists for this doctor and appointment type.'],
                    ],
                ], 422);
            }

            report($exception);

            return response()->json([
                'success' => false,
                'message' => 'The configuration could not be saved. Please try again.',
            ], 500);
        }

        $configuration->load([
            'doctor:id,full_name,designation',
            'appointmentType:id,name',
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Configuration created successfully.',
            'configuration' => $configuration,
        ], 201);
    }

    public function update(Request $request, int $id)
    {
        $this->checkPermission($request->user(), 'dac.edit');

        $configuration = Configuration::findOrFail($id);
        $validator = Validator::make($request->all(), [
            'doctor_id' => [
                'required',
                'integer',
                Rule::exists('employees', 'id')
                    ->where(fn ($query) => $query->where('is_doctor', true)->whereNull('deleted_at')),
                Rule::unique('configurations', 'doctor_id')
                    ->where('appointment_type_id', $request->input('appointment_type_id'))
                    ->ignore($configuration->id),
            ],
            'appointment_type_id' => ['required', 'integer', Rule::exists('appointment_types', 'id')],
            'duration' => ['required', 'integer', 'min:5', 'max:180', 'multiple_of:5'],
            'price' => ['required', 'numeric', 'min:0', 'max:99999999.99', 'regex:/^\d+(\.\d{1,2})?$/'],
            'status' => ['required', 'boolean'],
            'notes' => ['nullable', 'string', 'max:5000'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'The given data was invalid.',
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            DB::transaction(function () use ($request, $configuration, $validator) {
                $configuration->update([
                    ...$validator->validated(),
                    'edited_by' => $request->user()->id,
                    'edited_at' => now(),
                ]);
            });
        } catch (QueryException $exception) {
            if ($this->isUniqueConstraintViolation($exception)) {
                return response()->json([
                    'success' => false,
                    'message' => 'A configuration already exists for this doctor and appointment type.',
                    'errors' => [
                        'appointment_type_id' => ['A configuration already exists for this doctor and appointment type.'],
                    ],
                ], 422);
            }

            report($exception);

            return response()->json([
                'success' => false,
                'message' => 'The configuration could not be updated. Please try again.',
            ], 500);
        }

        $configuration->load([
            'doctor:id,full_name,designation',
            'appointmentType:id,name',
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Configuration updated successfully.',
            'configuration' => $configuration,
        ]);
    }

    private function isUniqueConstraintViolation(QueryException $exception): bool
    {
        $driverCode = $exception->errorInfo[1] ?? null;
        $message = strtolower($exception->getMessage());

        return in_array((string) $driverCode, ['1062', '2601', '2627'], true)
            || $exception->getCode() === '23505'
            || str_contains(
                $message,
                'unique constraint failed: configurations.doctor_id, configurations.appointment_type_id'
            );
    }
}
