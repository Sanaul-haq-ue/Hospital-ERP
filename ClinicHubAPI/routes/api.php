<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\administration\RoleController;
use App\Http\Controllers\Administration\PermissionController;

use App\Http\Controllers\hr\DeptController;
use App\Http\Controllers\hr\EmployeeController;


Route::post('/login',[AuthController::class,'login']);


Route::middleware('auth:sanctum')->group(function(){
    
    Route::get('/user', function (\Illuminate\Http\Request $request) {
        return response()->json([
            'success' => true,
            'user' => $request->user(),
        ]);
    });

    Route::get('/user-view',[AuthController::class,'index']);
    Route::post('/logout',[AuthController::class,'logout']);
    Route::post('/register',[AuthController::class,'store']);
    Route::put('/user-update/{id}', [AuthController::class, 'update']);
    Route::put('/user-deactivate/{id}', [AuthController::class, 'deactivate']);

    Route::get('/roles',[RoleController::class,'index']);
    Route::post('/store-role',[RoleController::class,'store']);
    Route::put('/update-role/{id}',[RoleController::class,'update']);

    Route::get('/permissions/roles', [PermissionController::class,'roles']);
    Route::get('/permissions', [PermissionController::class,'index']);
    Route::get('/permissions/roles/{role}/permissions', [PermissionController::class,'rolePermissions']);
    Route::put('/permissions/roles/{role}/permissions', [ PermissionController::class,'update']);

    Route::get('/dept',[DeptController::class,'index']);
    Route::post('/store/dept',[DeptController::class,'store']);
    Route::post('/update/dept/{id}',[DeptController::class,'update']);
    Route::delete('/delete/dept/{id}', [DeptController::class, 'destroy']);

    Route::get('/employees', [EmployeeController::class, 'index']);
    Route::post('/employees/store', [EmployeeController::class, 'store']);

});
