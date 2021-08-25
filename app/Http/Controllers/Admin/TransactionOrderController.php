<?php namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Cactuar\Admin\Traits\Controllers\BaseTrait;
use Cactuar\Admin\Traits\Controllers\ListingTrait;
use Cactuar\Admin\Traits\Controllers\CreateTrait;
use Cactuar\Admin\Traits\Controllers\EditTrait;
use Cactuar\Admin\Traits\Controllers\DeleteTrait;
use Cactuar\Admin\Traits\Controllers\PublishTrait;
use Cactuar\Admin\Traits\Models\SortableTrait;
use	Cactuar\Admin\Models\Menu;
use App\Models\Product;
use App\Models\Order;
use App\Models\Store;
use App\Models\Supplier;
use DB;
use media;
use Carbon;

class TransactionOrderController  extends Controller
{

    use BaseTrait, ListingTrait, CreateTrait, EditTrait, SortableTrait;

    private static $store_id, $product_id;

    public function __construct()
	{
		//$this->slider = \DB::table('gallery_categories')->orderBy('title')->pluck('title','id')->all();
    }

    public function listingRes()
	{
		return Order::orderBy('created_at','desc');
    }

    public function listingFields()
	{
			return [
                    'store_id'  => 'Toko',
                    'supplier_id'  => 'Supplier',
                    'product_id'  => 'Produk',
                    'order' => 'Order',
                    'is_approve' => 'Approve By Supplier',
			];

	}

    public function listingFilters()
	{
		return [

			'store_id' => [
				'label' => 'Toko',
				'options' => Store::whereIsActive(1)->pluck('name','id')->all(),
			],

            'product_id' => [
				'label' => 'Produk',
				'options' => Product::whereIsActive(1)->pluck('name','id')->all(),
			],

            'is_approve' => [
				'label' => 'Approve',
				'options' => [
                    '0' => 'No',
                    '1' => 'Yes',
                ],
			],
		];
	}

    public function listingSearchs()
	{
		return ['order'];
	}

	public function listingRanges()
	{
		return ['created_at'];
	}

	public function listingBulkAction()
	{
		$out = [];
		// $this->deleteBulkAction($out);
		return $out;
	}

	public function formRes()
	{
		return new Order();
    }

    public function formFields()
	{
		//$is_highlight = array('0'=>'No','1'=>'Yes');

		return [
            'store_id' => [
                'label' => 'Toko',
				'type' => 'select',
				'attributes' => [
					'class' => 'required',
				],
                'options' => $this->storeList(),
            ],
            'product_id' => [
                'label' => 'Toko',
				'type' => 'select',
				'attributes' => [
					'class' => 'required',
				],
                'options' => $this->productList(),
            ],
            // 'name' => [
			// 	'type' => 'text',
			// 	'label' => 'Name',
			// 	'multilang' => false,
			// 	// 'info' => 'Maximal 90 Character',
			// 	'attributes' => [
			// 		'class' => 'required',
			// 		// 'maxlength' => '90',
			// 	]
			// ],
            'order' => [
				'type' => 'text',
				'label' => 'Order',
				'multilang' => false,
				// 'info' => 'Maximal 90 Character',
				'attributes' => [
					'class' => 'required numeric',
					// 'maxlength' => '90',
				]
			],
            'is_approve' => [
				'type' => 'select',
				'label' => 'Approve?',
				'multilang' => false,
				// 'info' => 'Maximal 90 Character',
				'attributes' => [
					'class' => 'required',
					// 'maxlength' => '90',
                ],
                'options' => [
                    '0' => 'No',
                    '1' => 'Yes',
                ]
			],

        ];
    }

    public function storeList()
    {
        if (self::$store_id)
            return self::$store_id;

		self::$store_id = Store::whereIsActive(1)->orderBy('id','asc')->get();

        $arr_first = [];
        foreach(self::$store_id as $key_child => $value_child){
            $arr_first += [$value_child->id => $value_child->name];
        }
        // dd($arr_first);
        return $arr_first;
    }

    public function productList()
    {
        if (self::$product_id)
            return self::$product_id;

		self::$product_id = Product::whereIsActive(1)->orderBy('id','asc')->get();

        $arr_first = [];
        foreach(self::$product_id as $key_child => $value_child){
            $arr_first += [$value_child->id => $value_child->supplier->name . ' > ' . $value_child->name];
        }
        // dd($arr_first);
        return $arr_first;
    }

    public function listingCallback($key,$value,$item,$type)
	{
        if ($key == 'store_id') {
            $content = Store::find($item->store_id);

            return $content->name ?? 'not found';
        }

        if ($key == 'supplier_id') {
            $content = Product::find($item->product_id);

            return $content->supplier->name ?? 'not found';
        }

        if ($key == 'product_id') {
            $content = Product::find($item->product_id);

            return $content->name ?? 'not found';
        }

        if ($key == 'is_approve') {

            return ($item->is_approve == '0' ? 'No' : 'Yes');
        }
	}
}
