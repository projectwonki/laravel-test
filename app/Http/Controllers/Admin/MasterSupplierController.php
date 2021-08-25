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
use App\Models\Supplier;
use DB;
use media;
use Carbon;

class MasterSupplierController  extends Controller
{

    use BaseTrait, ListingTrait, CreateTrait, EditTrait, PublishTrait, SortableTrait;

    private static $subdomain_group_id;

    public function __construct()
	{
		//$this->slider = \DB::table('gallery_categories')->orderBy('title')->pluck('title','id')->all();
    }

    public function listingRes()
	{
		return Supplier::orderBy('created_at','desc');
    }

    public function listingFields()
	{
			return [
                    'name'  => 'Name',
                    'email'  => 'Email',
			];

	}

    public function listingSearchs()
	{
		return ['name'];
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
		return new Supplier;
    }

    public function formFields()
	{
		//$is_highlight = array('0'=>'No','1'=>'Yes');

		return [
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
            'email' => [
				'type' => 'text',
				'label' => 'Email',
				'multilang' => false,
				// 'info' => 'Maximal 90 Character',
				'attributes' => [
					'class' => 'required',
					// 'maxlength' => '90',
				]
			],

        ];
    }
}
