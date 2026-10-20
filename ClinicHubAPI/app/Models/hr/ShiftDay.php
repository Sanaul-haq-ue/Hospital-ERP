<?php

namespace App\Models\hr;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ShiftDay extends Model
{
    protected $fillable = ['day', 'start_time', 'end_time', 'is_work_day'];

    protected function casts(): array
    {
        return ['is_work_day' => 'boolean'];
    }

    public function shift(): BelongsTo
    {
        return $this->belongsTo(Shift::class, 'clinic_shift_id');
    }
}
