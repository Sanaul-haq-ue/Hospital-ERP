<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private array $columns = [
        'consultation_fee',
        'follow_up_fee',
        'consultation_duration',
        'room_number',
        'consultation_type',
    ];

    public function up(): void
    {
        if (!Schema::hasTable('employees')) {
            return;
        }

        $existingColumns = array_values(array_filter(
            $this->columns,
            fn (string $column) => Schema::hasColumn('employees', $column)
        ));

        if ($existingColumns) {
            Schema::table('employees', function (Blueprint $table) use ($existingColumns) {
                $table->dropColumn($existingColumns);
            });
        }
    }

    public function down(): void
    {
        if (!Schema::hasTable('employees')) {
            return;
        }

        Schema::table('employees', function (Blueprint $table) {
            if (!Schema::hasColumn('employees', 'consultation_fee')) {
                $table->decimal('consultation_fee', 10, 2)->default(0);
            }
            if (!Schema::hasColumn('employees', 'follow_up_fee')) {
                $table->decimal('follow_up_fee', 10, 2)->nullable();
            }
            if (!Schema::hasColumn('employees', 'consultation_duration')) {
                $table->unsignedSmallInteger('consultation_duration')->default(30);
            }
            if (!Schema::hasColumn('employees', 'room_number')) {
                $table->string('room_number')->nullable();
            }
            if (!Schema::hasColumn('employees', 'consultation_type')) {
                $table->string('consultation_type', 30)->default('both');
            }
        });
    }
};
