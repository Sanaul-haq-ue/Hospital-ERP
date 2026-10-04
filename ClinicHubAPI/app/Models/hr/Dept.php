<?php

namespace App\Models\hr;

use Illuminate\Database\Eloquent\Model;

class Dept extends Model
{
    protected $fillable = [
        'name',
        'short_description',
        'is_active',
    ];
}