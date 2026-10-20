<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('employees') && !Schema::hasColumn('employees', 'is_doctor')) {
            Schema::table('employees', function (Blueprint $table) {
                $table->boolean('is_doctor')->default(false);
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('employees') && Schema::hasColumn('employees', 'is_doctor')) {
            Schema::table('employees', function (Blueprint $table) {
                $table->dropColumn('is_doctor');
            });
        }
    }
};
