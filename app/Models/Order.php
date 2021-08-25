<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';

    public function store()
    {
        $this->belongsTo('App\Models\Store', 'store_id');
    }

    public function product()
    {
        $this->belongsTo('App\Models\Product', 'product_id');
    }
}
