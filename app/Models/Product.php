<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    public function supplier()
    {
        return $this->belongsTo('App\Models\Supplier', 'supplier_id');
    }

    public function order()
    {
        return $this->hasMany('App\Models\Order', 'product_id','id');
    }
}
