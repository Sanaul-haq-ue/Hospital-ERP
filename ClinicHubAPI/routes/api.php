<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\administration\RoleController;
use App\Http\Controllers\Administration\PermissionController;

use App\Http\Controllers\hr\DeptController;
use App\Http\Controllers\hr\EmployeeController;
use App\Http\Controllers\hr\ShiftController;
use App\Http\Controllers\appointment\ConfigurationController;
use App\Http\Controllers\appointment\AppointmentTypeController;


Route::post('/login',[AuthController::class,'login'])->middleware('throttle:20,1');


Route::middleware('auth:sanctum')->group(function(){
    
    Route::get('/user', function (\Illuminate\Http\Request $request) {
        return response()->json([
            'success' => true,
            'user' => $request->user(),
        ]);
    })->middleware('throttle:10,1');

    // Read routes: 60 requests per minute
    Route::middleware('throttle:60,1')->group(function () {

        Route::get('/user-view',[AuthController::class,'index']);
        Route::post('/logout',[AuthController::class,'logout']);

        Route::get('/roles',[RoleController::class,'index']);

        Route::get('/permissions/roles', [PermissionController::class,'roles']);
        Route::get('/permissions', [PermissionController::class,'index']);

        Route::get('/dept',[DeptController::class,'index']);

        Route::get('/employees', [EmployeeController::class, 'index']);

        Route::get('/shifts', [ShiftController::class, 'index']);
        Route::get('/shifts/employee-options', [ShiftController::class, 'employeeOptions']);

        Route::get('/appointment-types', [AppointmentTypeController::class, 'index']);

        Route::get('/configurations', [ConfigurationController::class, 'index']);
        
    });

    // Write routes: 10 requests per minute
    Route::middleware('throttle:20,1')->group(function () {

        Route::post('/register',[AuthController::class,'store']);
        Route::put('/user-update/{id}', [AuthController::class, 'update']);
        Route::put('/user-deactivate/{id}', [AuthController::class, 'deactivate']);

        Route::post('/store-role',[RoleController::class,'store']);
        Route::put('/update-role/{id}',[RoleController::class,'update']);

        Route::get('/permissions/roles/{role}/permissions', [PermissionController::class,'rolePermissions']);
        Route::put('/permissions/roles/{role}/permissions', [ PermissionController::class,'update']);

        Route::post('/store/dept',[DeptController::class,'store']);
        Route::post('/update/dept/{id}',[DeptController::class,'update']);
        Route::delete('/delete/dept/{id}', [DeptController::class, 'destroy']);

        Route::post('/employees/store', [EmployeeController::class, 'store']);
        Route::post('/employees/update/{id}', [EmployeeController::class, 'update']);
        Route::delete('/employees/delete/{id}', [EmployeeController::class, 'destroy']);

        Route::post('/shifts/store', [ShiftController::class, 'store']);
        Route::post('/shifts/update/{id}', [ShiftController::class, 'update']);
        Route::delete('/shifts/delete/{id}', [ShiftController::class, 'destroy']);

        Route::post('/appointment-types', [AppointmentTypeController::class, 'store']);
        Route::put('/appointment-types/{id}', [AppointmentTypeController::class, 'update']);

        Route::post('/configurations/store', [ConfigurationController::class, 'store']);
        Route::post('/configurations/update/{id}', [ConfigurationController::class, 'update']);
    });

    

    
    

    
    

    
    

    
    

});
