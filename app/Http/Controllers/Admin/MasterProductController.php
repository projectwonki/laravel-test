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
use App\Models\Supplier;
use DB;
use media;
use Carbon;

class MasterProductController  extends Controller
{

    use BaseTrait, ListingTrait, CreateTrait, EditTrait, PublishTrait, SortableTrait;

    private static $supplier_id;

    public function __construct()
	{
		//$this->slider = \DB::table('gallery_categories')->orderBy('title')->pluck('title','id')->all();
    }

    public function listingRes()
	{
		return Product::orderBy('created_at','desc');
    }

    public function listingFields()
	{
			return [
                    'supplier_id'  => 'Supplier',
                    'name'  => 'Name',
                    'stock' => 'Stock',
			];

	}

    public function listingFilters()
	{
		return [

			'supplier_id' => [
				'label' => 'Group',
				'options' => Supplier::whereIsActive(1)->pluck('name','id')->all(),
			],
		];
	}

    public function listingSearchs()
	{
		return ['name','stock'];
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
		return new Product();
    }

    public function formFields()
	{
		//$is_highlight = array('0'=>'No','1'=>'Yes');

		return [
            'supplier_id' => [
                'label' => 'Supplier',
				'type' => 'select',
				'attributes' => [
					'class' => 'required',
				],
                'options' => $this->supplierList(),
            ],
            'name' => [
				'type' => 'text',
				'label' => 'Name',
				'multilang' => false,
				// 'info' => 'Maximal 90 Character',
				'attributes' => [
					'class' => 'required',
					// 'maxlength' => '90',
				]
			],
            'stock' => [
				'type' => 'text',
				'label' => 'Stock',
				'multilang' => false,
				// 'info' => 'Maximal 90 Character',
				'attributes' => [
					'class' => 'required',
					// 'maxlength' => '90',
				]
			],

        ];
    }

    public function supplierList()
    {
        if (self::$supplier_id)
            return self::$supplier_id;

		self::$supplier_id = Supplier::whereIsActive(1)->orderBy('id','asc')->get();

        $arr_first = [];
        foreach(self::$supplier_id as $key_child => $value_child){
            $arr_first += [$value_child->id => $value_child->name];
        }
        // dd($arr_first);
        return $arr_first;
    }

    public function listingCallback($key,$value,$item,$type)
	{
        if ($key == 'supplier_id') {
            $content = Supplier::find($item->supplier_id);

            return $content->name ?? 'not found';
        }
	}
}
