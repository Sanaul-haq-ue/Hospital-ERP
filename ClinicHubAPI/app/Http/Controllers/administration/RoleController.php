<?php

namespace App\Http\Controllers\administration;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\administration\Role;

class RoleController extends Controller
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

    public function index(Request $request){
        $this->checkPermission($request->user(), 'roles.view');

        $roles = Role::where('id', '!=', 1)->get();

        return response()->json($roles);
    }

    public function store(Request $request){

        $this->checkPermission($request->user(), 'roles.create');

        $request->merge([
            'name' => strtolower($request->name),
        ]);

        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:roles,name',
            'short_description' => 'nullable|string|max:500',
            'is_active' => 'boolean',
        ]);

        $role = Role::create($validated);

        return response()->json($role, 201);
    }

    public function update(Request $request, $id){

        $this->checkPermission($request->user(), 'roles.edit');

        $request->merge([
            'name' => strtolower($request->name),
        ]);
        
        if($id ==1){
            return response()->json([
                'message'=> 'This role can be edit',
            ],401);
        }

        $role = Role::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:roles,name,' . $role->id,
            'short_description' => 'nullable|string|max:500',
            'is_active' => 'boolean',
        ]);

        $role->update($validated);

        return response()->json($role, 200);
    }
}
