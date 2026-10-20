<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('shifts', function (Blueprint $table) {
            $table->id();
            $table->string('shift_name', 150);
            $table->boolean('is_active')->default(true);
            $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
            $table->foreignId('edited_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamp('edited_at')->nullable();
            $table->foreignId('deleted_by')->nullable()->constrained('users')->nullOnDelete();
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('shift_days', function (Blueprint $table) {
            $table->id();
            $table->foreignId('shift_id')->constrained('shifts')->cascadeOnDelete();
            $table->string('day', 12);
            $table->time('start_time')->default('08:00:00');
            $table->time('end_time')->default('16:00:00');
            $table->boolean('is_work_day')->default(true);
            $table->timestamps();
            $table->unique(['shift_id', 'day']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('shift_days');
        Schema::dropIfExists('shifts');
    }
};
