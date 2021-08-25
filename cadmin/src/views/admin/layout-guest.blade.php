<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Admin Login</title>

	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    {{-- <link rel="icon" href="{{ asset('admin-wcms/images/favicon.ico') }}"> --}}
    @php
    $favicon = conf('site-setting')->favicon;

    if (media::source($favicon)) {

        if (strtolower(pathinfo(media::source($favicon), PATHINFO_EXTENSION) == 'png')) {
            // dd($favicon, media::source($favicon));
            echo '<link rel="icon" type="image/png" href="'.media::thumb($favicon, 'favicon').'" sizes="87x32">'.PHP_EOL;
        }

        if (strtolower(pathinfo(media::source($favicon), PATHINFO_EXTENSION) == 'ico')) {
            echo '<link rel="icon" href="'.media::url($favicon).'">'.PHP_EOL;
        }
    }

    @endphp

	<link rel="stylesheet" href="{{ asset('bootstrap/css/bootstrap.min.css') }}">
	<link rel="stylesheet" href="{{ asset('fa/css/font-awesome.min.css') }}">
	<link rel="stylesheet" href="{{ asset('bootstrap/css/ionicons.min.css') }}">
	<link rel="stylesheet" href="{{ asset('adminLTE-2/css/AdminLTE.min.css') }}">
	<link rel="stylesheet" href="{{ asset('root/c.css') }}">
	<link rel="stylesheet" href="{{ asset('admin-wcms/css/style.css') }}">
	<meta name="robots" content="noindex">
</head>
<body>

	<div class="login-box">
		<div class="head">
            <div class="logo" style="background-color: #094b69">
                <img src="{{ media::url($website->logo) }}" alt="">
            </div>
            {{--<div class="login-img">
                <img src="{{ asset('admin-wcms/images/material/logo-login.png') }}" width="82" height="40" alt="" class="logo-login">
            </div>--}}
        </div>
		<div class="login-box-body">

            @yield('content')

		</div>
		<div class="footer">
            LARAVEL CMS {{-- 1.0.0 --}}
        </div>

		<div class="login-logo">

		</div>
	</div>

    <script src="{{ asset('adminLTE-2/plugins/jQuery/jQuery-2.1.4.min.js') }}"></script>
	<script src="{{ asset('bootstrap/js/bootstrap.min.js') }}"></script>
	<script src="{{ asset('adminLTE-2/plugins/iCheck/icheck.min.js') }}"></script>

	<script src="{{ asset('root/jquery.validate.min.js') }}"></script>
	<script src="{{ asset('adminLTE-2/plugins/fastclick/fastclick.js') }}"></script>
	<script src="{{ asset('adminLTE-2/dist/js/app.min.js') }}"></script>
</body>
</html>
