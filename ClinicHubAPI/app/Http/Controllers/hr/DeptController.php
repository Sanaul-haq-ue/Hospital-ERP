<?php

namespace App\Http\Controllers\hr;

use App\Http\Controllers\Controller;
use App\Models\hr\Dept;
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

    public function index(Request $request){
        $this->checkPermission($request->user(), 'dept.view');

        $dept = Dept::all();

        return response()->json($dept);
    }

    public function store(Request $request)
    {
        $this->checkPermission($request->user(), 'dept.create');

        $validation = Validator::make($request->all(), [
            'name' => 'required|string|unique:depts,name|max:100',
            'short_description' => 'nullable|string|max:250',
            'is_active' => 'required|boolean',
        ]);

        if ($validation->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation Error',
                'errors' => $validation->errors(),
            ], 422);
        }

        try {
            $department = Dept::create([
                'name' => $request->name,
                'short_description' => $request->short_description,
                'is_active' => $request->is_active,
            ]);

            return response()->json($department, 201);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong. Please try again.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }


    public function update(){
        // $this->checkPermission($request->user(), 'dept.edit');
        
    }

    
}
