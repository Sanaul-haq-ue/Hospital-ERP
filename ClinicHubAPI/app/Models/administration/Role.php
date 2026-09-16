<?php

namespace App\Models\administration;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = [
        'name',
        'short_description',
        'is_active',
    ];
}
