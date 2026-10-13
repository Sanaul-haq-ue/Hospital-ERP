<?php

namespace App\Http\Controllers\hr;

use App\Http\Controllers\Controller;
use App\Models\hr\Dept;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class DeptController extends Controller
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

    private function generateDepartmentCode(?Dept $parent): string
    {
        // Level 1: Top-level departments (1–99)
        if (!$parent) {
            $last = Dept::whereNull('parent_id')
                ->orderByRaw('CAST(department_code AS UNSIGNED) DESC')
                ->first();

            $nextCode = $last
                ? (int) $last->department_code + 1
                : 1;

            if ($nextCode > 99) {
                throw ValidationException::withMessages([
                    'parent_id' => 'Maximum of 99 top-level departments reached.',
                ]);
            }

            return (string) $nextCode;
        }

        // Determine the parent's actual hierarchy depth.
        $depth = 1;
        $current = $parent;

        while ($current->parent_id !== null) {
            $current = Dept::findOrFail($current->parent_id);
            $depth++;
        }

        // Maximum hierarchy depth: 4 levels.
        if ($depth >= 4) {
            throw ValidationException::withMessages([
                'parent_id' => 'Cannot create a department beyond level 4.',
            ]);
        }

        $prefix = $parent->department_code;

        // Find the last child belonging to this parent.
        $last = Dept::where('parent_id', $parent->id)
            ->orderByRaw('CAST(department_code AS UNSIGNED) DESC')
            ->first();

        $nextSequence = $last
            ? (int) substr($last->department_code, strlen($prefix)) + 1
            : 1;

        if ($nextSequence > 99) {
            throw ValidationException::withMessages([
                'parent_id' => 'Maximum of 99 child departments reached.',
            ]);
        }

        return $prefix . str_pad(
            (string) $nextSequence,
            2,
            '0',
            STR_PAD_LEFT
        );
    }

    public function index(Request $request)
    {
        $this->checkPermission($request->user(), 'dept.view');

        $departments = Dept::all()->keyBy('id');

        $buildTree = function ($parentId = null, $level = 1) use (
            &$buildTree,
            $departments
        ) {
            return $departments
                ->where('parent_id', $parentId)
                ->sortBy(function ($dept) {
                    return (int) $dept->department_code;
                })
                ->flatMap(function ($dept) use (&$buildTree, $level) {
                    $dept->level = $level;

                    return collect([$dept])->concat(
                        $buildTree($dept->id, $level + 1)
                    );
                });
        };

        return response()->json(
            $buildTree()->values()
        );
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'parent_id' => [
                'nullable',
                'integer',
                'exists:depts,id',
            ],
            'name' => ['required', 'string', 'max:255'],
            'short_description' => ['nullable', 'string'],
            'is_active' => ['required', 'boolean'],
        ]);

        $parent = isset($validated['parent_id'])
            ? Dept::findOrFail($validated['parent_id'])
            : null;

        $validated['department_code'] =
            $this->generateDepartmentCode($parent);

        $department = Dept::create($validated);

        return response()->json($department, 201);
    }

    
    public function update(Request $request, $id)
    {
        $this->checkPermission($request->user(), 'dept.edit');

        $validation = Validator::make($request->all(), [
            'name' => 'required|string|max:100|unique:depts,name,' . $id,
            'short_description' => 'nullable|string|max:250',
            'is_active' => 'required|boolean',
            'parent_id' => 'nullable|integer|exists:depts,id',
        ]);

        if ($validation->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation Error',
                'errors' => $validation->errors(),
            ], 422);
        }

        try {
            $department = Dept::findOrFail($id);

            // Prevent a department from being its own parent.
            if (
                $request->filled('parent_id') &&
                (int) $request->parent_id === (int) $department->id
            ) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validation Error',
                    'errors' => [
                        'parent_id' => [
                            'A department cannot be its own parent.',
                        ],
                    ],
                ], 422);
            }

            $department->update([
                'name' => $request->name,
                'short_description' => $request->short_description,
                'is_active' => $request->is_active,
            ]);

            return response()->json($department->fresh());

        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Department not found.',
            ], 404);

        } catch (\Exception $e) {
            report($e);

            return response()->json([
                'success' => false,
                'message' => 'Something went wrong. Please try again.',
            ], 500);
        }
    }


    
    public function destroy(Request $request, $id)
    {
        $this->checkPermission($request->user(), 'dept.delete');

        try {
            $department = Dept::findOrFail($id);

            // Prevent deletion if this department has child departments.
            if ($department->children()->exists()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Cannot delete this department because it has child departments. Please delete its child departments first.',
                ], 422);
            }

            $department->delete();

            return response()->json([
                'success' => true,
                'message' => 'Department deleted successfully.',
            ]);

        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Department not found.',
            ], 404);

        } catch (\Exception $e) {
            report($e);

            return response()->json([
                'success' => false,
                'message' => 'Something went wrong. Please try again.',
            ], 500);
        }
    }


    
}
