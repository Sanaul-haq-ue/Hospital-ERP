<?php

namespace App\Http\Controllers\Administration;

use App\Http\Controllers\Controller;
use App\Models\administration\Permission;
use App\Models\administration\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class PermissionController extends Controller
{
    /**
     * Check whether the authenticated user has a permission.
     */
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

    /**
     * Get active roles.
     */
    public function roles(Request $request): JsonResponse
    {
        $this->checkPermission($request->user(), 'roles.view');

        $roles = Role::where('id', '!=', 1)
            ->where('is_active', true)
            ->orderBy('name')
            ->get([
                'id',
                'name',
                'short_description',
                'is_active',
            ]);

        return response()->json([
            'success' => true,
            'data' => $roles,
        ]);
    }

    /**
     * Get all available permissions.
     */
    public function index(Request $request): JsonResponse
    {
        $this->checkPermission($request->user(), 'roles.view');

        $permissions = Permission::orderBy('module')
            ->orderBy('action')
            ->get([
                'id',
                'name',
                'module',
                'action',
                'display_name',
            ]);

        return response()->json([
            'success' => true,
            'data' => $permissions,
        ]);
    }

    /**
     * Get permissions assigned to a specific role.
     */
    public function rolePermissions(
            Request $request,
            Role $role
        ): JsonResponse {
            $this->checkPermission($request->user(), 'roles.view');

            $permissionIds = $role->permissions()
                ->pluck('permissions.id')
                ->values();

            return response()->json([
                'success' => true,
                'data' => [
                    'role' => $role,
                    'permission_ids' => $permissionIds,
                ],
            ]);
        }

    /**
     * Save permissions for a role.
     */
    public function update(
            Request $request,
            Role $role
        ): JsonResponse {
            $this->checkPermission($request->user(), 'roles.edit');

            // Admin role permissions cannot be modified
            if ($role->id === 1) {
                return response()->json([
                    'success' => false,
                    'message' => 'Admin role permissions cannot be modified.',
                ], 403);
            }

            $validated = $request->validate([
                'permission_ids' => ['required', 'array'],
                'permission_ids.*' => [
                    'integer',
                    'exists:permissions,id',
                ],
            ]);

            DB::transaction(function () use ($role, $validated) {
                $role->permissions()->sync($validated['permission_ids']);
            });

            return response()->json([
                'success' => true,
                'message' => 'Permissions updated successfully.',
                'data' => [
                    'role_id' => $role->id,
                    'permission_ids' => $role->permissions()
                        ->pluck('permissions.id')
                        ->values(),
                ],
            ]);
        }
}