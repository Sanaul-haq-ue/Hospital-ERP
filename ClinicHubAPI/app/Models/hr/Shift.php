<?php

namespace App\Models\hr;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Shift extends Model
{
    use SoftDeletes;

    protected $fillable = ['shift_name', 'is_active', 'created_by', 'edited_by', 'edited_at', 'deleted_by'];

    protected function casts(): array
    {
        return ['is_active' => 'boolean'];
    }

    public function days(): HasMany
    {
        return $this->hasMany(ShiftDay::class);
    }
}
