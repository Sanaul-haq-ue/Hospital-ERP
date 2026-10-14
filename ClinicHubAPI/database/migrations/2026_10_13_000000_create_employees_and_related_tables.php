<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('employee_code')->unique();
            $table->string('full_name');
            $table->string('gender', 20);
            $table->date('date_of_birth')->nullable();
            $table->string('phone', 30);
            $table->string('email')->unique();
            $table->text('address')->nullable();
            $table->string('city')->nullable();
            $table->string('district')->nullable();
            $table->string('zip_code', 20)->nullable();
            $table->text('bio')->nullable();
            $table->foreignId('dept_id')->nullable()->constrained('depts')->nullOnDelete();
            $table->string('designation');
            $table->string('qualification')->nullable();
            $table->unsignedSmallInteger('experience_years')->default(0);
            $table->string('license_number')->nullable();
            $table->string('previous_workplace')->nullable();
            $table->text('memberships')->nullable();
            $table->string('profile_photo_path')->nullable();
            $table->string('cv_path')->nullable();
            $table->string('nid_path')->nullable();
            $table->string('other_document_path')->nullable();
            $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('edited_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamp('edited_at')->nullable();
            $table->foreignId('deleted_by')->nullable()->constrained('users')->nullOnDelete();
            $table->softDeletes();
            $table->timestamps();
        });

        foreach (['employee_educations', 'employee_experiences', 'employee_schedules'] as $tableName) {
            Schema::create($tableName, function (Blueprint $table) use ($tableName) {
                $table->id();
                $table->foreignId('employee_id')->constrained('employees')->cascadeOnDelete();
                if ($tableName === 'employee_educations') {
                    $table->string('degree')->nullable();
                    $table->string('institution')->nullable();
                    $table->string('year', 10)->nullable();
                    $table->text('description')->nullable();
                } elseif ($tableName === 'employee_experiences') {
                    $table->string('workplace')->nullable();
                    $table->string('position')->nullable();
                    $table->date('start_date')->nullable();
                    $table->date('end_date')->nullable();
                    $table->boolean('currently_working')->default(false);
                } else {
                    $table->string('day', 12);
                    $table->time('start_time')->nullable();
                    $table->time('end_time')->nullable();
                    $table->string('status', 20)->default('Work Day');
                }
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('employee_schedules');
        Schema::dropIfExists('employee_experiences');
        Schema::dropIfExists('employee_educations');
        Schema::dropIfExists('employees');
    }
};
