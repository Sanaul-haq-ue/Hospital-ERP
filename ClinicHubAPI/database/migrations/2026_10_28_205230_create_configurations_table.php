
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('configurations', function (Blueprint $table) {
            $table->id();

            // Configuration relationships
            $table->foreignId('doctor_id')
                ->constrained('employees')
                ->restrictOnDelete();

            $table->foreignId('appointment_type_id')
                ->constrained('appointment_types')
                ->restrictOnDelete();

            // Configuration details
            $table->unsignedSmallInteger('duration');
            $table->decimal('price', 10, 2);
            $table->boolean('status')->default(true);
            $table->text('notes')->nullable();

            // Audit information
            $table->foreignId('created_by')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            // Timestamps
            $table->timestamps();

            $table->foreignId('edited_by')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->timestamp('edited_at')->nullable();

            // Prevent duplicate doctor and appointment type combinations
            $table->unique(['doctor_id', 'appointment_type_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('configurations');
    }
};
