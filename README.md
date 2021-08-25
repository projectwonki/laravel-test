## Laravel Test

berikut adalah step by step penggunaan aplikasi sederhana untuk manajemen toko, supplier, product dan order

1. git clone git@github.com:projectwonki/laravel-test.git

2. composer update

3. running command untuk publish package jwt -> php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"

4. running command untuk generate key jwt -> php artisan jwt:secret

5. running command untuk seeder -> php artisan db:seed --class=UserSeeder

6. running command -> php artisan serve

7. untuk manage content toko, supplier, product, order, silahkan buka url http://127.0.0.1:8000/admin-panel

8. pastikan pada file config/auth.php :
'defaults' => [
    'guard' => 'web',
    'passwords' => 'users',
],

6. setelah berhasil running seeder, login dengan credential berikut : admin / laravel-test

## REST API

untuk testing REST API dapat mengunduh file library postman yang sudah disediakan didalam folder routes/api

1. sebelum melakukan testing rest api pada postman, pastikan terlebih dahulu untuk file config/auth.php seperti ini :

'defaults' => [
        'guard' => 'api',
        'passwords' => 'stores',
    ],
