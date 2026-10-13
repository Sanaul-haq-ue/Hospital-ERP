<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('employees')) {
            return;
        }

        if (!Schema::hasColumn('employees', 'dept_id')) {
            Schema::table('employees', function (Blueprint $table) {
                $table->foreignId('dept_id')->nullable()->constrained('depts')->nullOnDelete();
            });
        }

        if (Schema::hasColumn('employees', 'department')) {
            DB::table('employees')
                ->whereNull('dept_id')
                ->whereNotNull('department')
                ->orderBy('id')
                ->get(['id', 'department'])
                ->each(function ($employee) {
                    $value = trim($employee->department);
                    $parts = explode(' - ', $value, 2);
                    $department = DB::table('depts')
                        ->where('department_code', $parts[0])
                        ->when(isset($parts[1]), fn ($query) => $query->orWhere('name', $parts[1]))
                        ->first();

                    if (!$department) {
                        $department = DB::table('depts')
                            ->where('name', $value)
                            ->orWhere('department_code', $value)
                            ->first();
                    }

                    if ($department) {
                        DB::table('employees')->where('id', $employee->id)->update(['dept_id' => $department->id]);
                    }
                });

            Schema::table('employees', function (Blueprint $table) {
                $table->dropColumn('department');
            });
        }
    }

    public function down(): void
    {
        if (!Schema::hasTable('employees') || !Schema::hasColumn('employees', 'dept_id')) {
            return;
        }

        if (!Schema::hasColumn('employees', 'department')) {
            Schema::table('employees', function (Blueprint $table) {
                $table->string('department')->nullable();
            });
        }

        DB::table('employees')->whereNotNull('dept_id')->orderBy('id')->get(['id', 'dept_id'])
            ->each(function ($employee) {
                $department = DB::table('depts')->find($employee->dept_id);
                if ($department) {
                    DB::table('employees')->where('id', $employee->id)->update([
                        'department' => $department->department_code . ' - ' . $department->name,
                    ]);
                }
            });

        Schema::table('employees', function (Blueprint $table) {
            $table->dropConstrainedForeignId('dept_id');
        });
    }
};
