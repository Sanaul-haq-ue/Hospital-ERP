<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{

    public function index(Request $request)
    {
        $this->checkPermission($request->user(), 'users.view');

        $users = User::with('role')
            ->where('role_id', '!=', 1)
            ->latest()
            ->get();

        return response()->json($users);
    }

    
    public function login(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'email' => 'Required|email',
            'password' => 'required|string|min:8',
        ]);
        if ($validation->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation Error',
                'error' => $validation->errors(),
            ], 422);
        }

        try {

            $user = User::with('role.permissions')
                ->where('email', $request->email)
                ->first();

            if (!$user) {
                return response()->json([
                    'success' => false,
                    'message' => 'No account found with this email address.',
                ], 404);
            }

            if (!$user->is_active) {
                return response()->json([
                    'success' => false,
                    'message' => 'Your account is currently inactive. Please contact the administrator.',
                ], 403);
            }

            if (!Hash::check($request->password, $user->password)) {
                return response()->json([
                    'success' => false,
                    'message' => 'InCorrect Password',
                ], 401);
            }

            $token = $user->createToken('auth-token')->plainTextToken;

            return response()->json([
                'success' => true,
                'message' => 'Login Successfull',
                'data' => [
                    'user' => [
                        'id' => $user->id,
                        'name' => $user->first_name,
                        'email' => $user->email,
                        'role' => $user->role,
                        'permissions' => $user->role?->permissions
                            ->pluck('name')
                            ->values()
                            ->toArray() ?? [],
                    ],
                    'token' => $token,
                ],
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong. Please try again.',
                'error'   => $e->getMessage(),
            ], 500);
        }
    }


    public function logout(Request $request){
        try{
            $request->user()->currentAccessToken()->delete();

            return response()->json([
                'success'=>true,
                'message'=>'Logout Successfull',
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                'success'=>false,
                'message'=>'Logout Failed',
                'error'=>$e->getMessage(),
            ], 500);
        }

    }

    public function store(Request $request)
    {
        $this->checkPermission($request->user(), 'users.create');

        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'nullable|string|max:255',

            'email' => 'required|email|max:255|unique:users,email',
            'phone' => 'required|string|size:11|unique:users,phone|regex:/^01[3-9]\d{8}$/',

            'address' => 'nullable|string|max:500',

            'role_id' => 'required|exists:roles,id',

            'username' => [ 'required', 'string','min:6', 'max:20', 'unique:users,username', 'regex:/^[A-Za-z0-9_]+$/', ],

            'password' => 'required|string|min:8|max:22',

            'zip_code' => 'nullable|string|max:20',
            'city' => 'nullable|string|max:100',
            'country' => 'nullable|string|max:100',

            'profile_photo' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',

            'nid_document' => 'nullable|file|mimes:pdf|max:100',

            'passport_document' => 'nullable|file|mimes:pdf|max:100',
        ]);

        /*
        |--------------------------------------------------------------------------
        | Profile Photo
        |--------------------------------------------------------------------------
        */

        if ($request->hasFile('profile_photo')) {

            $file = $request->file('profile_photo');

            $fileName = 'user_' . time() . '_' . uniqid()
                . '.' . $file->getClientOriginalExtension();

            $file->move(
                public_path('assets\user\img'),
                $fileName
            );

            $validated['profile_photo'] = $fileName;
        }

        /*
        |--------------------------------------------------------------------------
        | NID Document
        |--------------------------------------------------------------------------
        */

        if ($request->hasFile('nid_document')) {

            $file = $request->file('nid_document');

            $fileName = 'nid_' . time() . '_' . uniqid()
                . '.' . $file->getClientOriginalExtension();

            $file->move(
                public_path('assets\user\document'),
                $fileName
            );

            $validated['nid_document'] = $fileName;
        }

        /*
        |--------------------------------------------------------------------------
        | Passport Document
        |--------------------------------------------------------------------------
        */

        if ($request->hasFile('passport_document')) {

            $file = $request->file('passport_document');

            $fileName = 'passport_' . time() . '_' . uniqid()
                . '.' . $file->getClientOriginalExtension();

            $file->move(
                public_path('assets\user\document'),
                $fileName
            );

            $validated['passport_document'] = $fileName;
        }

        /*
        |--------------------------------------------------------------------------
        | Password
        |--------------------------------------------------------------------------
        */

        $validated['password'] = Hash::make($validated['password']);

        /*
        |--------------------------------------------------------------------------
        | Create User
        |--------------------------------------------------------------------------
        */

        $user = User::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'User created successfully.',
            'user' => $user,
        ], 201);
    }


    public function update(Request $request, $id)
    {
        $this->checkPermission($request->user(), 'users.edit');

        $user = User::findOrFail($id);

        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'nullable|string|max:255',

            'email' => 'required|email|max:255|unique:users,email,' . $user->id,
            'phone' => 'required|string|size:11|unique:users,phone|regex:/^01[3-9]\d{8}$/',

            'address' => 'nullable|string|max:500',

            'role_id' => 'required|exists:roles,id',

            'username' => [
                'required',
                'string',
                'min:6',
                'max:20',
                'unique:users,username,' . $user->id,
                'regex:/^[A-Za-z0-9_]+$/',
            ],

            'password' => 'nullable|string|min:8|max:22',

            'zip_code' => 'nullable|string|max:20',
            'city' => 'nullable|string|max:100',
            'country' => 'nullable|string|max:100',

            'profile_photo' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',

            'nid_document' => 'nullable|file|mimes:pdf|max:100',

            'passport_document' => 'nullable|file|mimes:pdf|max:100',
        ]);

        /*
        |--------------------------------------------------------------------------
        | Profile Photo
        |--------------------------------------------------------------------------
        */

        if ($request->hasFile('profile_photo')) {

            // Delete previous profile photo
            if ($user->profile_photo) {

                $oldFile = public_path(
                    'assets/user/img/' . $user->profile_photo
                );

                if (file_exists($oldFile)) {
                    unlink($oldFile);
                }
            }

            // Upload new profile photo
            $file = $request->file('profile_photo');

            $fileName = 'user_' . time() . '_' . uniqid()
                . '.' . $file->getClientOriginalExtension();

            $file->move(
                public_path('assets/user/img'),
                $fileName
            );

            $validated['profile_photo'] = $fileName;
        }

        /*
        |--------------------------------------------------------------------------
        | NID Document
        |--------------------------------------------------------------------------
        */

        if ($request->hasFile('nid_document')) {

            // Delete previous NID
            if ($user->nid_document) {

                $oldFile = public_path(
                    'assets/user/document/' . $user->nid_document
                );

                if (file_exists($oldFile)) {
                    unlink($oldFile);
                }
            }

            // Upload new NID
            $file = $request->file('nid_document');

            $fileName = 'nid_' . time() . '_' . uniqid()
                . '.' . $file->getClientOriginalExtension();

            $file->move(
                public_path('assets/user/document'),
                $fileName
            );

            $validated['nid_document'] = $fileName;
        }

        /*
        |--------------------------------------------------------------------------
        | Passport Document
        |--------------------------------------------------------------------------
        */

        if ($request->hasFile('passport_document')) {

            // Delete previous passport
            if ($user->passport_document) {

                $oldFile = public_path(
                    'assets/user/document/' . $user->passport_document
                );

                if (file_exists($oldFile)) {
                    unlink($oldFile);
                }
            }

            // Upload new passport
            $file = $request->file('passport_document');

            $fileName = 'passport_' . time() . '_' . uniqid()
                . '.' . $file->getClientOriginalExtension();

            $file->move(
                public_path('assets/user/document'),
                $fileName
            );

            $validated['passport_document'] = $fileName;
        }

        /*
        |--------------------------------------------------------------------------
        | Password
        |--------------------------------------------------------------------------
        */

        if (!empty($validated['password'])) {

            $validated['password'] = Hash::make($validated['password']);

        } else {

            unset($validated['password']);
        }

        /*
        |--------------------------------------------------------------------------
        | Update User
        |--------------------------------------------------------------------------
        */

        $user->update($validated);

        $user->load('role');

        return response()->json([
            'success' => true,
            'message' => 'User updated successfully.',
            'user' => $user,
        ]);
    }

    public function deactivate($id)
    {
        $this->checkPermission($request->user(), 'users.delete');

        $user = User::findOrFail($id);

        $user->update([
            'is_active' => false,
            'deactivated_by' => auth()->id(),
            'deactivated_at' => now(),
        ]);

        $user->load('role');

        return response()->json([
            'success' => true,
            'message' => 'User deactivated successfully.',
            'user' => $user,
        ]);
    }


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

}
