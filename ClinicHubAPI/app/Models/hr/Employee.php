<?php

namespace App\Models\hr;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\hr\Dept;
use App\Models\User;
use Illuminate\Database\Eloquent\SoftDeletes;

class Employee extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'employee_code', 'full_name', 'gender', 'date_of_birth', 'phone', 'email',
        'address', 'city', 'district', 'zip_code', 'bio', 'dept_id', 'designation',
        'qualification', 'experience_years', 'license_number', 'previous_workplace',
        'memberships', 'profile_photo_path', 'cv_path', 'nid_path',
        'other_document_path', 'created_by', 'edited_by', 'edited_at', 'deleted_by',
    ];

    public function educations(): HasMany { return $this->hasMany(EmployeeEducation::class); }
    public function experiences(): HasMany { return $this->hasMany(EmployeeExperience::class); }
    public function schedules(): HasMany { return $this->hasMany(EmployeeSchedule::class); }
    public function department(): BelongsTo { return $this->belongsTo(Dept::class, 'dept_id'); }
    public function creator(): BelongsTo { return $this->belongsTo(User::class, 'created_by'); }
    public function editor(): BelongsTo { return $this->belongsTo(User::class, 'edited_by'); }
    public function deleter(): BelongsTo { return $this->belongsTo(User::class, 'deleted_by'); }

    protected function casts(): array
    {
        return ['edited_at' => 'datetime'];
    }
}
