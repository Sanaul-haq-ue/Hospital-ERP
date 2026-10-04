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
            // Doctors Section
            // Doctor Manage
            [
                'name' => 'docM.view',
                'module' => 'docM',
                'action' => 'view',
                'display_name' => 'View Doctors',
            ],
            [
                'name' => 'docM.create',
                'module' => 'docM',
                'action' => 'create',
                'display_name' => 'Create Doctors',
            ],
            [
                'name' => 'docM.edit',
                'module' => 'docM',
                'action' => 'edit',
                'display_name' => 'Edit Doctors',
            ],
            [
                'name' => 'docM.delete',
                'module' => 'docM',
                'action' => 'delete',
                'display_name' => 'Delete Doctors',
            ],
            // Specialization
            [
                'name' => 'Spec.view',
                'module' => 'Spec',
                'action' => 'view',
                'display_name' => 'View Departments',
            ],
            [
                'name' => 'Spec.create',
                'module' => 'Spec',
                'action' => 'create',
                'display_name' => 'Create Departments',
            ],
            [
                'name' => 'Spec.edit',
                'module' => 'Spec',
                'action' => 'edit',
                'display_name' => 'Edit Departments',
            ],
            [
                'name' => 'Spec.delete',
                'module' => 'Spec',
                'action' => 'delete',
                'display_name' => 'Delete Departments',
            ],

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
        ];

        foreach ($permissions as $permission) {
            Permission::updateOrCreate(
                ['name' => $permission['name']],
                $permission
            );
        }
    }
}