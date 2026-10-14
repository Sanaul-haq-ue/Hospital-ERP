<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('employees')) {
            return;
        }

        $missing = array_values(array_filter(
            ['created_by', 'edited_by', 'edited_at', 'deleted_by', 'deleted_at'],
            fn (string $column) => !Schema::hasColumn('employees', $column)
        ));

        if (!$missing) {
            return;
        }

        Schema::table('employees', function (Blueprint $table) use ($missing) {
            if (in_array('created_by', $missing, true)) {
                $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
            }
            if (in_array('edited_by', $missing, true)) {
                $table->foreignId('edited_by')->nullable()->constrained('users')->nullOnDelete();
            }
            if (in_array('edited_at', $missing, true)) {
                $table->timestamp('edited_at')->nullable();
            }
            if (in_array('deleted_by', $missing, true)) {
                $table->foreignId('deleted_by')->nullable()->constrained('users')->nullOnDelete();
            }
            if (in_array('deleted_at', $missing, true)) {
                $table->softDeletes();
            }
        });
    }

    public function down(): void
    {
        if (!Schema::hasTable('employees')) {
            return;
        }

        Schema::table('employees', function (Blueprint $table) {
            foreach (['created_by', 'edited_by', 'deleted_by'] as $column) {
                if (Schema::hasColumn('employees', $column)) {
                    $table->dropConstrainedForeignId($column);
                }
            }
            foreach (['edited_at', 'deleted_at'] as $column) {
                if (Schema::hasColumn('employees', $column)) {
                    $table->dropColumn($column);
                }
            }
        });
    }
};
