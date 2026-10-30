<?php

namespace App\Http\Controllers\appointment;

use App\Http\Controllers\Controller;
use App\Models\appointment\AppointmentType;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class AppointmentTypeController extends Controller
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
        $this->checkPermission($request->user(), 'appointmentType.view');

        return AppointmentType::query()->orderBy('name')->get();
    }

    public function store(Request $request)
    {
        $this->checkPermission($request->user(), 'appointmentType.create');

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:50', 'unique:appointment_types,name'],
            'description' => ['nullable', 'string', 'max:1000'],
            'is_active' => ['required', 'boolean'],
        ]);

        return response()->json(AppointmentType::create($validated), 201);
    }

    public function update(Request $request, int $id)
    {
        $this->checkPermission($request->user(), 'appointmentType.edit');

        $appointmentType = AppointmentType::findOrFail($id);
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:150', Rule::unique('appointment_types', 'name')->ignore($appointmentType->id)],
            'description' => ['nullable', 'string', 'max:1000'],
            'is_active' => ['required', 'boolean'],
        ]);

        $appointmentType->update($validated);

        return response()->json($appointmentType);
    }
}
