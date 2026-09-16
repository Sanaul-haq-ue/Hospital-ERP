<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\administration\RoleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login',[AuthController::class,'login']);


Route::middleware('auth:sanctum')->group(function(){
    
    Route::get('/user', function (\Illuminate\Http\Request $request) {
        return response()->json([
            'success' => true,
            'user' => $request->user(),
        ]);
    });

    Route::post('/logout',[AuthController::class,'logout']);

    Route::get('/roles',[RoleController::class,'index']);
    Route::post('/store-role',[RoleController::class,'store']);
    Route::put('/update-role/{id}',[RoleController::class,'update']);
});