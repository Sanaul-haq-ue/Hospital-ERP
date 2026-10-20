<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('shifts') && !Schema::hasColumn('shifts', 'deleted_at')) {
            Schema::table('shifts', function ($table) {
                $table->softDeletes();
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('shifts') && Schema::hasColumn('shifts', 'deleted_at')) {
            Schema::table('shifts', function ($table) {
                $table->dropSoftDeletes();
            });
        }
    }
};
