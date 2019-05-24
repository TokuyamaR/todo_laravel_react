<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    //white_list
    protected $fillable = ['title', 'project_id'];
}
