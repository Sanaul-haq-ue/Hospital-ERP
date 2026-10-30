<?php

namespace Database\Seeders;

use App\Models\administration\Permission;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    public function run(): void
    {
        $permissions = [
            // Dashboard
            [
                'name' => 'dashboard.view',
                'module' => 'dashboard',
                'action' => 'view',
                'display_name' => 'View Dashboard',
            ],
            // Doctor Dashboard
            [
                'name' => 'doctor_dashboard.view',
                'module' => 'doctor_dashboard',
                'action' => 'view',
                'display_name' => 'View Doctor Dashboard',
            ],
            
            // Doctors Section
            
            
            // Appointments
            // [
            //     'name' => 'appointments.view',
            //     'module' => 'appointments',
            //     'action' => 'view',
            //     'display_name' => 'View Appointments',
            // ],
            // [
            //     'name' => 'appointments.create',
            //     'module' => 'appointments',
            //     'action' => 'create',
            //     'display_name' => 'Create Appointments',
            // ],
            // [
            //     'name' => 'appointments.edit',
            //     'module' => 'appointments',
            //     'action' => 'edit',
            //     'display_name' => 'Edit Appointments',
            // ],
            // [
            //     'name' => 'appointments.delete',
            //     'module' => 'appointments',
            //     'action' => 'delete',
            //     'display_name' => 'Delete Appointments',
            // ],
            
            // Appointment Type
            [
                'name' => 'appointmentType.view',
                'module' => 'appointmentType',
                'action' => 'view',
                'display_name' => 'View Appointment Type',
            ],
            [
                'name' => 'appointmentType.create',
                'module' => 'appointmentType',
                'action' => 'create',
                'display_name' => 'Create Appointment Type',
            ],
            [
                'name' => 'appointmentType.edit',
                'module' => 'appointmentType',
                'action' => 'edit',
                'display_name' => 'Edit Appointment Type',
            ],
            [
                'name' => 'appointmentType.delete',
                'module' => 'appointmentType',
                'action' => 'delete',
                'display_name' => 'Delete Appointment Type',
            ],
            // Doctor Appointment Configurations
            [
                'name' => 'dac.view',
                'module' => 'dac',
                'action' => 'view',
                'display_name' => 'View Doctor Appointment Configurations',
            ],
            [
                'name' => 'dac.create',
                'module' => 'dac',
                'action' => 'create',
                'display_name' => 'Create Doctor Appointment Configurations',
            ],
            [
                'name' => 'dac.edit',
                'module' => 'dac',
                'action' => 'edit',
                'display_name' => 'Edit Doctor Appointment Configurations',
            ],
            [
                'name' => 'dac.delete',
                'module' => 'dac',
                'action' => 'delete',
                'display_name' => 'Delete Doctor Appointment Configurations',
            ],

            // HR Section
            // Departments
            [
                'name' => 'dept.view',
                'module' => 'dept',
                'action' => 'view',
                'display_name' => 'View Departments',
            ],
            [
                'name' => 'dept.create',
                'module' => 'dept',
                'action' => 'create',
                'display_name' => 'Create Departments',
            ],
            [
                'name' => 'dept.edit',
                'module' => 'dept',
                'action' => 'edit',
                'display_name' => 'Edit Departments',
            ],
            [
                'name' => 'dept.delete',
                'module' => 'dept',
                'action' => 'delete',
                'display_name' => 'Delete Departments',
            ],

            // Employee
            [
                'name' => 'employee.view',
                'module' => 'employee',
                'action' => 'view',
                'display_name' => 'View Employee',
            ],
            [
                'name' => 'employee.create',
                'module' => 'employee',
                'action' => 'create',
                'display_name' => 'Create Employee',
            ],
            [
                'name' => 'employee.edit',
                'module' => 'employee',
                'action' => 'edit',
                'display_name' => 'Edit Employee',
            ],
            [
                'name' => 'employee.delete',
                'module' => 'employee',
                'action' => 'delete',
                'display_name' => 'Delete Employee',
            ],

            // Shift
            [
                'name' => 'shift.view',
                'module' => 'shift',
                'action' => 'view',
                'display_name' => 'View Shift',
            ],
            [
                'name' => 'shift.create',
                'module' => 'shift',
                'action' => 'create',
                'display_name' => 'Create Shift',
            ],
            [
                'name' => 'shift.edit',
                'module' => 'shift',
                'action' => 'edit',
                'display_name' => 'Edit Shift',
            ],
            [
                'name' => 'shift.delete',
                'module' => 'shift',
                'action' => 'delete',
                'display_name' => 'Delete Shift',
            ],

            // Administration Section
            // Users
            [
                'name' => 'users.view',
                'module' => 'users',
                'action' => 'view',
                'display_name' => 'View Users',
            ],
            [
                'name' => 'users.create',
                'module' => 'users',
                'action' => 'create',
                'display_name' => 'Create Users',
            ],
            [
                'name' => 'users.edit',
                'module' => 'users',
                'action' => 'edit',
                'display_name' => 'Edit Users',
            ],
            [
                'name' => 'users.delete',
                'module' => 'users',
                'action' => 'delete',
                'display_name' => 'Delete Users',
            ],
            // Roles
            [
                'name' => 'roles.view',
                'module' => 'roles',
                'action' => 'view',
                'display_name' => 'View Roles',
            ],
            [
                'name' => 'roles.create',
                'module' => 'roles',
                'action' => 'create',
                'display_name' => 'Create Roles',
            ],
            [
                'name' => 'roles.edit',
                'module' => 'roles',
                'action' => 'edit',
                'display_name' => 'Edit Roles',
            ],
            [
                'name' => 'roles.delete',
                'module' => 'roles',
                'action' => 'delete',
                'display_name' => 'Delete Roles',
            ],
            // Permission
            [
                'name' => 'permission.view',
                'module' => 'permission',
                'action' => 'view',
                'display_name' => 'View Permission',
            ],
            [
                'name' => 'permission.create',
                'module' => 'permission',
                'action' => 'create',
                'display_name' => 'Create Permission',
            ],
            [
                'name' => 'permission.edit',
                'module' => 'permission',
                'action' => 'edit',
                'display_name' => 'Edit Permission',
            ],
            [
                'name' => 'permission.delete',
                'module' => 'permission',
                'action' => 'delete',
                'display_name' => 'Delete Permission',
            ],
        ];

        foreach ($permissions as $permission) {
            Permission::updateOrCreate(
                ['name' => $permission['name']],
                $permission
            );
        }
    }
}