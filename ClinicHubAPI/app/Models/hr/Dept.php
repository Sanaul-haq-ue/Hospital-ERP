<?php

namespace App\Models\hr;

use Illuminate\Database\Eloquent\Model;

class Dept extends Model
{
    protected $table = 'depts';

    protected $fillable = [
        'parent_id',
        'department_code',
        'name',
        'short_description',
        'is_active',
    ];

    public function parent()
    {
        return $this->belongsTo(self::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(self::class, 'parent_id');
    }
}
