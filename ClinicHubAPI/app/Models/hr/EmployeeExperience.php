<?php

namespace App\Models\hr;

use Illuminate\Database\Eloquent\Model;

class EmployeeExperience extends Model
{
    protected $table = 'employee_experiences';
    protected $fillable = ['workplace', 'position', 'start_date', 'end_date', 'currently_working'];
}
