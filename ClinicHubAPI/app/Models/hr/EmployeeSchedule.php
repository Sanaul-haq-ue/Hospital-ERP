<?php

namespace App\Models\hr;

use Illuminate\Database\Eloquent\Model;

class EmployeeSchedule extends Model
{
    protected $table = 'employee_schedules';
    protected $fillable = ['day', 'start_time', 'end_time', 'status'];
}
