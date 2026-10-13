<?php

namespace App\Models\hr;

use Illuminate\Database\Eloquent\Model;

class EmployeeEducation extends Model
{
    protected $table = 'employee_educations';
    protected $fillable = ['degree', 'institution', 'year', 'description'];
}
