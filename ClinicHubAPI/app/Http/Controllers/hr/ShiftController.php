<?php

namespace App\Http\Controllers\hr;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\hr\Shift;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ShiftController extends Controller
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
        $this->checkPermission($request->user(), 'shift.view');

        return Shift::with('days')->latest()->get();
    }

    public function employeeOptions(Request $request)
    {
        $user = $request->user();
        $canView = $user->role_id === 1 || ($user->role
            && $user->role->permissions()
                ->whereIn('name', ['employee.view', 'employee.create', 'employee.edit'])
                ->exists());

        abort_unless($canView, 403, 'You do not have permission to view shifts.');

        return Shift::query()
            ->where('is_active', true)
            ->orderBy('shift_name')
            ->get(['id', 'shift_name']);
    }

    public function store(Request $request)
    {
        $this->checkPermission($request->user(), 'shift.create');

        $validated = $request->validate([
            'shift_name' => 'required|string|max:150',
            'is_active' => 'required|boolean',
            'schedule' => 'required|array|size:7',
            'schedule.*.day' => 'required|in:Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday',
            'schedule.*.start_time' => 'required|date_format:H:i',
            'schedule.*.end_time' => 'required|date_format:H:i',
            'schedule.*.is_work_day' => 'required|boolean',
        ]);

        $shift = DB::transaction(function () use ($request, $validated) {
            $shift = Shift::create([
                'shift_name' => $validated['shift_name'],
                'is_active' => $validated['is_active'],
                'created_by' => $request->user()->id,
            ]);

            foreach ($validated['schedule'] as $day) {
                $shift->days()->create($day);
            }

            return $shift->load('days');
        });

        return response()->json([
            'success' => true,
            'message' => 'Shift saved successfully.',
            'shift' => $shift,
        ], 201);
    }

    public function update(Request $request, int $id)
    {
        $this->checkPermission($request->user(), 'shift.edit');

        $shift = Shift::findOrFail($id);
        $validated = $request->validate([
            'shift_name' => 'required|string|max:150',
            'is_active' => 'required|boolean',
            'schedule' => 'required|array|size:7',
            'schedule.*.day' => 'required|in:Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday',
            'schedule.*.start_time' => 'required|date_format:H:i',
            'schedule.*.end_time' => 'required|date_format:H:i',
            'schedule.*.is_work_day' => 'required|boolean',
        ]);

        DB::transaction(function () use ($request, $validated, $shift) {
            $shift->update([
                'shift_name' => $validated['shift_name'],
                'is_active' => $validated['is_active'],
                'edited_by' => $request->user()->id,
                'edited_at' => now(),
            ]);

            $shift->days()->delete();
            foreach ($validated['schedule'] as $day) {
                $shift->days()->create($day);
            }
        });

        return response()->json([
            'success' => true,
            'message' => 'Shift updated successfully.',
            'shift' => $shift->load('days'),
        ]);
    }

    public function destroy(Request $request, int $id)
    {
        $this->checkPermission($request->user(), 'shift.delete');

        $shift = Shift::findOrFail($id);
        $shift->deleted_by = $request->user()->id;
        $shift->save();
        $shift->delete();

        return response()->json([
            'success' => true,
            'message' => 'Shift deleted successfully.',
        ]);
    }
}
