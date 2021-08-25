<?php namespace Cactuar\Admin\Helpers;

use Cactuar\Admin\Helpers\adminForm;
use Cactuar\Admin\Models\Draft;
use Cactuar\Admin\Models\DraftLog;
use Cactuar\Admin\Models\MetaData;
use Cactuar\Admin\Models\Widget;
use Cactuar\Admin\Models\WidgetDetail;
use Cactuar\Admin\Helpers\lang;
use Cactuar\Admin\Models\Permalink;
use Form;
use DB;
use Schema;
use Auth;

class adminFormDraft extends adminForm
{
    public static function initial($module, $fields = [])
    {
        return new adminFormDraft($module, $fields);
    }
    
    public function draw($res)
    {
		$this->res = $res;
        
		$form = '';
		foreach ($this->fields AS $key => $field) {
			$form .= $this->row($key, $field, $res);
            $form .= $this->rowOrigin($key, $field, $res);
		}
		
		return view('cactuar::admin.form-draft', compact('form'));
    }
    
    public function row($key, $field)
	{
        $module = $this->module;
        $res = Draft::initial($this->res->id,$this->module,$this->res);
        
		$html = '';
        
		if (array_get($field, 'subtitle'))
			$html .= '
				<h3 class="form-subtitle" origin="'.$key.'">'.array_get($field, 'subtitle').'</h3>';
        
        if (array_get($field, 'type') == 'widget') {
            return $html.$this->widget($key, $field, $res);
        }
		
		if (array_get($field, 'type') == 'free') {
			$html .= '
				<div class="form-group clearfix" origin="'.$key.'">'.array_get($field, 'html').'</div>';
		} else {
			$html .= '
				<div class="form-group clearfix" origin="'.$key.'" style="position:relative;">
					<label class="col-md-2 col-xs-12 control-label">'.array_get($field, 'label').'</label>
					<div class="col-md-10 col-xs-12">';
			if (array_get($field, 'multilang') == true) {
                foreach (lang::codes() AS $lang) {
                    $field['attributes']['lang'] = $lang;

                    if (array_get($field, 'meta') && in_array($field['meta'],['title','keywords','description','image'])) {
                        $v = $res->meta($field['meta'],$lang);
                    } else {
                        $v = $res->translated($key, $lang);
                    }

                    $html .= '
                        <div class="toggle-target lang-target-container" toggle-target="'.$lang.'-container" container-id="'.$key.'">'.
                            self::input(array_get($field, 'type'), $key.'_'.$lang, $v, $key, $field).
                        '</div>';
                }
            } else {
                
                if (array_get($field,'meta') == 'image') {
                    $v = $res->meta($field['meta'], config('cadmin.lang.default'));
                    $html .= self::input(array_get($field, 'type'), $key, $v, $key, $field);
                } else {
                    $html .= self::input(array_get($field, 'type'), $key, $res->{$key}, $key, $field);
                }
            }
			
			
			$html .= '
					</div>
				</div>';
		}
		
		return $html;
	}
    
    public function rowOrigin($key, $field)
	{
        $module = $this->module;
        $res = $this->res;
        $field['readonly'] = true;
        
		$html = '';
        
        if (array_get($field, 'type') == 'widget') {
            return $html.$this->widgetOrigin($key, $field, $res);
        }
		
		if (array_get($field, 'type') == 'free') {
			$html .= '
				<div class="form-group clearfix" origin="'.$key.'">'.array_get($field, 'html').'</div>';
		} else {
			$html .= '
				<div class="form-group clearfix" origin="origin-content-'.$key.'" style="position:relative;">
					<label class="col-md-2 col-xs-12 control-label">'.array_get($field, 'label').'</label>
					<div class="col-md-10 col-xs-12">';
			
			if (in_array(array_get($field, 'type'), ['multicheck','multiselect'])) {
				$html .= self::input(array_get($field, 'type'), $key, Related::selected($res->id, $module, $key), $key, $field);
			} else if (in_array(array_get($field, 'type'), ['multiselect-table','multicheck-table'])) {
                $value = [];
                foreach (\DB::table($field['table'])->where($field['id_column'],$res->id)->get() as $v) {
                    $value[] = $v->{$field['relation_column']};
                }
                $html .= self::input(array_get($field, 'type'), $key, $value, $key, $field);
            } else {
				if (array_get($field, 'multilang') == true) {
					foreach (lang::codes() AS $lang) {
                        $field['attributes']['lang'] = $lang;
                        
                        if (array_get($field, 'type') === 'permalink') { //move to seperate function, sehingga mudah diextend
                            $v = Permalink::permalink($this->module, $res->id, $lang);    
                        } else if (array_get($field, 'meta') && in_array($field['meta'],['title','keywords','description','image'])) {
                            if (!isset($meta))
                                $meta = [];
                            if (!array_key_exists($lang,$meta))
                                $meta[$lang] = MetaData::whereModule($this->module)->whereUniqid($res->id)->whereLang($lang)->first();
                            $v = $meta[$lang] ? $meta[$lang]->{'meta_'.$field['meta']} : '';
                        } else {
                            $v = $res->translated($key, $lang);
                        }
                        
						$html .= '
							<div class="toggle-target lang-target-container" toggle-target="'.$lang.'-container" container-id="'.$key.'">'.
								self::input(array_get($field, 'type'), $key.'_'.$lang, $v, $key, $field).
							'</div>';
					}
				} else {
					$html .= self::input(array_get($field, 'type'), $key, $res->{$key}, $key, $field);
				}
			}
			
			$html .= '
					</div>
				</div>';
		}
		
		return $html;
	}
    
    protected function widgetOrigin($key, $widget, $res)
	{
        $this->widgets[$key] = $widget;
        
		$html = '
			<div class="widgets widget-origin" widget-source="origin-widget-'.$key.'" widget-min="'.array_get($widget, 'min').'" widget-max="'.array_get($widget, 'max').'">
				<div class="widget-container">';
		
        $min = array_get($widget,'min');
        if (!$min)
            $min = 0;
        $max = array_get($widget,'max');
        
        $count = 0;
		if ($res->id) {
			foreach (Widget::whereUniqid($res->id)->whereModule($this->module)->where('key',$key)->get() AS $row) {
				$html .= '
					<div class="widget-row">
						';
				if (array_get($widget,'readonly') != true)
                    $html .= '<div class="widget-tools">
							<a href=# class="widget-sort-down"><i class="fa fa-chevron-down"></i></a>
							<a href=# class="widget-sort-up"><i class="fa fa-chevron-up"></i></a>
							<a href=# class="widget-remove"><i class="fa fa-trash-o"></i></a>
						</div>';
                
                if (array_get($widget,'readonly') != true)
                    $html .= Form::hidden('widget_'.$key.'[old_'.$row->id.']');
                
				foreach (array_get($widget, 'widgets') AS $kk => $field) {
                    $field['readonly'] = array_get($widget,'readonly');
                    $html .= $this->widgetRow($key, $kk, $field, $row,'old_'.$row->id);
				}
				$html .= '
					</div>';
                $count++;
			}
		}
        
        while($count < $min) {
            $html .= '
					<div class="widget-row">
						';
				if (array_get($widget,'readonly') != true)
                    $html .= '<div class="widget-tools">
							<a href=# class="widget-sort-down"><i class="fa fa-chevron-down"></i></a>
							<a href=# class="widget-sort-up"><i class="fa fa-chevron-up"></i></a>
							<a href=# class="widget-remove"><i class="fa fa-trash-o"></i></a>
						</div>';
                
                if (array_get($widget,'readonly') != true)
                    $html .= Form::hidden('widget_'.$key.'[auto_'.$count.']');
				
                foreach (array_get($widget, 'widgets') AS $kk => $field) {
                    $field['readonly'] = array_get($widget,'readonly');
                    $html .= $this->widgetRow($key, $kk, $field, new Widget,'auto_'.$count);
				}
				$html .= '
					</div>';
            $count++;
        }
		
        $html .= '
                    </div>';
        
        if (array_get($widget,'readonly') != true)
            $html .= '<a href=# class="widget-add btn bg-purple btn-flat" style="margin-top:-10px;margin-bottom:10px;'.(($max && $count >= $max) ? 'display:none;' : '').'"><i class="fa fa-plus"></i> more</a>';
        $html .= '
                </div>';
		
        
        
        if ($min) {
            $html .= '<style>';
            for($i=1;$i<=$min;$i++) {
                $html .= '.widgets[widget-source="'.$key.'"] .widget-container .widget-row:nth-child('.($i).') .widget-remove { display:none; }'.PHP_EOL;
            }
            $html .= '</style>';
        }
        
		return $html;
	}
    
    protected function widget($key, $widget, $res)
	{
        $this->widgets[$key] = $widget;
        
		$html = '
			<div class="widgets" widget-source="'.$key.'" widget-min="'.array_get($widget, 'min').'" widget-max="'.array_get($widget, 'max').'">
				<div class="widget-container">';
		
        $min = array_get($widget,'min');
        if (!$min)
            $min = 0;
        $max = array_get($widget,'max');
        
        $count = 0;
        
		if ($res->id) {
            foreach (Draft::widget($this->module,$res->id,$key) AS $row) {
				$html .= '
					<div class="widget-row">';
						
                if (array_get($widget,'readonly') != true)
                    $html .= '<div class="widget-tools">
							<a href=# class="widget-sort-down"><i class="fa fa-chevron-down"></i></a>
							<a href=# class="widget-sort-up"><i class="fa fa-chevron-up"></i></a>
							<a href=# class="widget-remove"><i class="fa fa-trash-o"></i></a>
						</div>';
                
                $html .= Form::hidden('widget_'.$key.'[old_'.$row->id.']');
				foreach (array_get($widget, 'widgets') AS $kk => $field) {
                    $field['readonly'] = array_get($widget,'readonly');
					$html .= $this->widgetRow($key, $kk, $field, $row,'old_'.$row->id);
				}
				$html .= '
					</div>';
                $count++;
            }
		}
		
        while($count < $min) {
            $html .= '
					<div class="widget-row">
						';
				if (array_get($widget,'readonly') != true)
                    $html .= '<div class="widget-tools">
							<a href=# class="widget-sort-down"><i class="fa fa-chevron-down"></i></a>
							<a href=# class="widget-sort-up"><i class="fa fa-chevron-up"></i></a>
							<a href=# class="widget-remove"><i class="fa fa-trash-o"></i></a>
						</div>';
                $html .= Form::hidden('widget_'.$key.'[auto_'.$count.']');
				foreach (array_get($widget, 'widgets') AS $kk => $field) {
                    $field['readonly'] = array_get($widget,'readonly');
                    $html .= $this->widgetRow($key, $kk, $field, new Widget,'auto_'.$count);
				}
				$html .= '
					</div>';
            $count++;
        }
        
		$html .= '
                    </div>';
        if (array_get($widget,'readonly') != true)
            $html .= '<a href=# class="widget-add btn bg-purple btn-flat" style="margin-top:-10px;margin-bottom:10px;'.(($max && $count >= $max) ? 'display:none;' : '').'"><i class="fa fa-plus"></i> more</a>';
        $html .= '
                </div>';
		
        if ($min) {
            $html .= '<style>';
            for($i=1;$i<=$min;$i++) {
                $html .= '.widgets[widget-source="'.$key.'"] .widget-container .widget-row:nth-child('.($i).') .widget-remove { display:none; }'.PHP_EOL;
            }
            $html .= '</style>';
        }
        
		return $html;
	}
    
    public function save(&$res,$callbackBefore = null, $callbackAfter = null, $label = '')
    {
        $post = $this->postData();
        
        if (is_callable($callbackBefore)) {
            $post = $callbackBefore($post,$res);
        }
        
        return DB::transaction(function() use($res, $post, $callbackAfter, $label) {
            $draftLog = DraftLog::whereModule($this->module)->whereUniqid($res->id)->first();
            if (!$draftLog) {
                $draftLog = new DraftLog;
                $draftLog->module = $this->module;
                $draftLog->uniqid = $res->id;
            }
            
            $draftLog->title = $label;
            $draftLog->draft_by = Auth::user()->display_name;
            $draftLog->status = 0;
			$draftLog->touch();
            $draftLog->save();

            Draft::whereModule($this->module)->whereUniqid($res->id)->delete();
            foreach ($post['main'] as $k => $v) {
                $draft = new Draft;
                $draft->uniqid = $res->id;
                $draft->module = $this->module;
                $draft->lang = '';
                $draft->draft_key = $k;
                $draft->draft_value = $v;
                $draft->save();
            }
            
            foreach ($post['widget'] AS $k => $v) {
                foreach (Widget::whereModule($this->module.'-draft')->whereUniqid($res->id)->where('key',$k)->get() as $oldW) {
                    WidgetDetail::whereWidgetId($oldW->id)->delete();
                    $oldW->delete();
                }
                
                foreach ($v AS $kk => $vv) {
                    $w = new Widget;
                    $w->uniqid = $res->id;
                    $w->module = $this->module.'-draft';
                    $w->key = $k;
                    $w->save();

                    foreach ($vv AS $kkk => $vvv) {
                        $wd = new WidgetDetail;
                        $wd->widget_id = $w->id;
                        $wd->lang = array_get($vvv, 'lang');
                        $wd->field_name = array_get($vvv, 'field_name');
                        $wd->val = array_get($vvv, 'val') ? array_get($vvv, 'val') : '';
                        $wd->save();
                    }	
                }
            }
            
            if ($post['il8n'] != []) {
                foreach ($post['il8n'] AS $lang => $row) {
                    foreach ($row as $k=>$v) {
                        $draft = new Draft;
                        $draft->uniqid = $res->id;
                        $draft->module = $this->module;
                        $draft->lang = $lang;
                        $draft->draft_key = $k;
                        $draft->draft_value = $v;
                        $draft->save();        
                    }
                }
            }

            if ($post['meta'] != []) {
                MetaData::whereModule($this->module.'-draft')->whereUniqid($res->id)->delete();
                foreach ($post['meta'] as $lang => $meta) {
                    $m = new MetaData;
                    $m->module = $this->module.'-draft';
                    $m->uniqid = $res->id;
                    $m->lang = $lang;
                    $m->meta_title = array_get($meta,'title');
                    $m->meta_keywords = array_get($meta,'keywords');
                    $m->meta_description = array_get($meta,'description');
                    $m->meta_image = array_get($meta,'image');
                    $m->save();
                }
            }
            
            if (is_callable($callbackAfter)) {
                $res = $callbackAfter($res);
                if ($res !== true) {
                    DB::rollback();
                    return $res;
                }
            }
            
            return true;
        });
    }
    
    public function deleteDraft($res)
    {
        return DB::transaction(function() use($res) {
            DraftLog::whereModule($this->module)->whereUniqid($res->id)->delete();
            Draft::whereModule($this->module)->whereUniqid($res->id)->delete();
            Widget::whereModule($this->module.'-draft')->whereUniqid($res->id)->delete();
            
            if (Schema::hasTable('meta_datas'))
                MetaData::whereModule($this->module.'-draft')->whereUniqid($res->id)->delete();
            return true;   
        });
    }
    
    public function approve($item, $callbackAfter = null)
    {
        $log = DraftLog::whereModule($this->module)->whereUniqid($item->id)->first();
        
        return DB::transaction(function() use($item,$callbackAfter,$log) {
            $save = $this->save($item);
            if ($save != true)
                return false;
            
            $log->approve_by = Auth::user()->display_name;
            $log->status = 1;
			$log->touch();
            $log->save();
            
            if (is_callable($callbackAfter)) {
                $res = $callbackAfter($item);
                if ($res !== true) {
                    DB::rollback();
                    return $res;
                }
            }
            
            return true;
        });
    }
    
    public function merge($item, $callbackAfter = null)
    {
        $post = [
            'main' => [],
            'il8n' => [],
            'widget' => [],
        ];
        
        foreach ($this->fields as $k=>$v)
        {
            if ($v['type'] == 'widget') {
                $post['widget'][] = $k;
                continue;
            }
            
            if (array_get($v,'multilang') == true) {
                $post['il8n'][] = $k;
            } else {
                $post['main'][] = $k;
            }
        }
        
        return DB::transaction(function() use($post,$item,$callbackAfter) {
            $save = $this->save($item);
            if ($save != true)
                return false;
            
            if ($post['widget'] != []) { //widget
                foreach ($post['widget'] as $k) {
                    Widget::whereModule($this->module)->whereUniqid($item->id)->where('key',$k)->delete();
                    Widget::whereModule($this->module.'-draft')->whereUniqid($item->id)->where('key',$k)->update(['module'=>$this->module]);
                }
            }

            if ($post['il8n'] != []) { //translate table
                foreach(lang::codes() as $lang) {
                    $update = [];
                    foreach ($post['il8n'] as $k) {
                        if ($draft = Draft::whereModule($this->module)->whereUniqid($item->id)->whereLang($lang)->whereDraftKey($k)->first())
                            $update[$k] = $draft->draft_value;
                    }
                    if ($update != [])
                        DB::table($item->transTable)->whereBaseId($item->id)->whereLang($lang)->update($update);
                }
            }

            if ($post['main'] != []) { //main table
                foreach ($post['main'] as $k) {
                    if ($draft = Draft::whereModule($this->module)->whereUniqid($item->id)->whereDraftKey($k)->first())
                        $item->{$k} = $draft->draft_value;
                }
            }
			
			$item->touch();
			$item->save();

            if (Schema::hasTable('meta_datas')) { //meta data (if table exists)
                MetaData::whereModule($this->module)->whereUniqid($item->id)->delete();
                MetaData::whereModule($this->module.'-draft')->whereUniqid($item->id)->update(['module'=>$this->module]);
            }

            foreach (Permalink::whereModule($this->module)->whereUniqid($item->id)->get() as $permalink)
                $permalink->compileMeta($item);
            
            if (is_callable($callbackAfter)) {
                $res = $callbackAfter($item);
                if ($res !== true) {
                    DB::rollback();
                    return $res;
                }
            }
            DraftLog::whereModule($this->module)->whereUniqid($item->id)->delete();
            
            return true;
        });
    }
}