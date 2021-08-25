@if (isset($formValidate) && is_array($formValidate)) 
    <div class="callout callout-danger alert alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        <p>
            @foreach($formValidate AS $e)
                {!! $e !!}<br/>
            @endforeach
    </div>
@endif

<div class='stickys clearfix'>
    <div class="sticky sticky-title btn btn-flat bg-gray">
        <span><i class="fa fa-tag"></i> <em></em></label>
    </div>
    <div class="sticky sticky-lang btn btn-flat bg-purple">
        <span><i class="fa fa-language"></i> <em></em></span>
        <ul>
            @foreach (Config::get('cadmin.lang.codes') as $lang)
                <li><a href=# class='toggle-actor toggle-actor' toggle-target='{{$lang}}-container' toggle-group='lang'>{{ Config::get('cadmin.lang.labels.'.$lang) }}</a></li>
            @endforeach
        </ul>
    </div>
</div>

{!! $form !!}