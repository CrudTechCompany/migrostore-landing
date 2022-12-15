<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @method static create(array $all)
 */
class Question extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $guarded=false;
    protected $table='questions';
}
