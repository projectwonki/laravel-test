@extends('cactuar::admin.layout-master')

@section('content')

@if (is_array($baseMenu))
    <div class="col-md-12">
        @foreach ($baseMenu AS $v)
            <a href="{{ array_get($v, 'url') }}" class="btn btn-app">
                <i class="fa fa-{{ array_get($v, 'fa') }}"></i>
                {!! array_get($v, 'label') !!}
            </a>
        @endforeach
    </div>
@endif


<style>
    .selector-body { max-width:1200px; }
    .selector { padding:10px; text-align:center; margin-bottom:40px; }
    .selector .figure { display:block; height:200px; background-size:contain; background-repeat:no-repeat; background-position:center center; margin-bottom:10px; }
    .selector .btn { display:block; overflow:hidden; text-overflow:ellipsis; }
    .col-md-6 {width: 100%;}
</style>

<div class="col-md-6 col-xs-12">
    <div class="box box-primary">

        <div class="box-header with-border">
            <h3 class="box-title">Create Menu</h3>
            <div class="clear">
                @foreach ($subMenu as $v)
                    <a href="{{ array_get($v, 'url') }}" class="btn btn-flat bg-blue"><i class="fa fa-{{ array_get($v, 'fa') }}"></i> {!! array_get($v, 'label') !!}</a>
                @endforeach
            </div>
            <br>
            <span class="info">Specify the type in advance of one of the following options :</span>
        </div>
        <div class="box-body">

            @if (count($templates)>=1)
            <h3 class="form-subtitle">Page Template</h3>
            <span class="info">Click image for preview</span>
            <div class="selector-body ">
                @foreach ($templates as $k=>$v)
                    @php $get_menu = \Cactuar\Admin\Models\Menu::translate()->whereType($k)->first(); @endphp

                    @if(array_get($v, 'unique') === true && is_null($get_menu))
                    <div  class="selector col-md-2">
                        <a href="{{ array_get($v, 'preview') }}"
                           style="background-image:url('{{ array_get($v, 'preview') }}')"
                           class="figure fancybox"
                           >&nbsp;</a>
                        <a href="{{ url::admin($module) }}/create?type={{ $k }}" class="btn btn-flat bg-orange">{{ array_get($v,'label') }}</a>
                    </div>
                    @endif

                    @if(array_get($v, 'unique') === false)
                    <div  class="selector col-md-2">
                        <a href="{{ array_get($v, 'preview') }}"
                           style="background-image:url('{{ array_get($v, 'preview') }}')"
                           class="figure fancybox"
                           >&nbsp;</a>
                        <a href="{{ url::admin($module) }}/create?type={{ $k }}" class="btn btn-flat bg-orange">{{ array_get($v,'label') }}</a>
                    </div>
                    @endif
                @endforeach
            </div>
            @endif

            <div style="clear:both;"></div>

            @if (count($defaultType)>=1)
            <h3 class="form-subtitle" style="margin-top:50px;">Other Type</h3>
            <div class="selector-body">
                @foreach ($defaultType as $k=>$v)
                    <div  class="selector col-md-2">
                        <a href="{{ url::admin($module) }}/create?type={{ $k }}" class="btn btn-flat bg-orange">{{ $v }}</a>
                    </div>
                @endforeach
            </div>
            @endif
        </div>
    </div>
</div>

<script type="text/javascript" src="{{ asset('fancybox/jquery.mousewheel-3.0.4.pack.js') }}"></script>
<script type="text/javascript" src="{{ asset('fancybox/jquery.fancybox-1.3.4.js') }}"></script>
<link rel="stylesheet" type="text/css" href="{{ asset('fancybox/jquery.fancybox-1.3.4.css') }}" media="screen" />
<script>
    $(document).ready(function() { $('.fancybox').fancybox(); });
</script>

@endsection
