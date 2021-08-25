<?php namespace Cactuar\Admin\Models;

use Illuminate\Database\Eloquent\Model;
use Cactuar\Admin\Helpers\og;
use Cactuar\Admin\Helpers\lang;

class MetaData extends Model
{
    protected $table = 'meta_datas';
    public $timestamps = false;

    public static function meta($uniqid,$module,$lang = null)
    {
        if (is_null($lang))
            $lang = lang::active();
        
        $meta = self::whereUniqid($uniqid)->whereModule($module)->whereLang($lang)->first();
        return $meta ? $meta : new MetaData;
    }
    
    public function ogSet()
    {
        return og::sets($this);
    }
    
    public function getMetaImageAttribute()
    {
        //meta image manipulation for non-multilingual
        
        if ($this->getOriginal('meta_image')) //jika ada, ambil dari original
            return $this->getOriginal('meta_image');
        
        //ambil dari saudara
        foreach(self::select('meta_image')->whereModule($this->module)->whereUniqid($this->uniqid)->where('id','!=',$this->id)->get() as $v) {
            if ($v->getOriginal('meta_image'))
                return $v->getOriginal('meta_image');
        }
        
        return '';
    }
}