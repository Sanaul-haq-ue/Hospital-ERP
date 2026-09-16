<?php

namespace App\Http\Controllers\administration;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\administration\Role;

class RoleController extends Controller
{

    public function index(){
        $roles = Role::where('id', '!=', 1)->get();

        return response()->json($roles);
    }

    public function store(Request $request){
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:roles,name',
            'short_description' => 'nullable|string|max:500',
            'is_active' => 'boolean',
        ]);

        $role = Role::create($validated);

        return response()->json($role, 201);
    }

    public function update(Request $request, $id){
        
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
