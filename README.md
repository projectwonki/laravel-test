## Laravel Test

berikut adalah step by step penggunaan aplikasi sederhana untuk manajemen toko, supplier, product dan order

1. git clone git@github.com:projectwonki/laravel-test.git

2. composer update

3. running command untuk publish package jwt -> php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"

4. running command untuk generate key jwt -> php artisan jwt:secret

5. running command untuk migration database -> php artisan migrate

notes: untuk penggunaan database yang sudah ada dapat dilihat petunjuk pada section DATABASE paling bawah

6. running command untuk seeder -> php artisan db:seed --class=UserSeeder

7. running command -> php artisan serve

8. untuk manage content toko, supplier, product, order, silahkan buka url http://127.0.0.1:8000/admin-panel

9. pastikan pada file config/auth.php :
'defaults' => [
    'guard' => 'web',
    'passwords' => 'users',
],

10. setelah berhasil running seeder, login dengan credential berikut : admin / laravel-test

## REST API

untuk testing REST API dapat mengunduh file library postman (laravel-test.json) yang sudah disediakan didalam folder routes/

1. sebelum melakukan testing rest api pada postman, pastikan terlebih dahulu untuk file config/auth.php seperti ini :

'defaults' => [
        'guard' => 'api',
        'passwords' => 'stores',
    ],


## DATABASE

disini saya menyediakan opsi untuk menggunakan database yang sudah ada ataupun melakukan migration database dengan kondisi data kosong.

jika ingin menggunakan database yang sudah ada, bisa didump file data.sql yang sudah saya sediakan di folder database/. 

jika ingin menggunakan data kosong dari awal, dapat menjalankan command php artisan migrate seperti biasa

## CMS

untuk mengakses manajemen role, bisa menggunakan credential berikut : root / root123

untuk role lainnya bisa menggunakan credential berikut :

1. user role ADMIN : admin / laravel-test

2. user role TOKO : toko / laravel-test

3. user role SUPPLIER : supplier / laravel-test

## OBSTACLE && ISSUE

1. terdapat kesulitan dalam proses pengiriman email perihal verifikasi data. sudah dicoba testing pakai SMTP yang benar tapi masih tetap belum berhasil terkirim emailnya

2. karena keterbatasan waktu, untuk handling manajemen data supplier, toko, product, dan order, bisa diakses di url http://127.0.0.1:8000/admin-panel dengan credential yang telah disebutkan  di section CMS


Terima kasih atas kesempatan dan perhatiannya.

Regards,

Nanda Prasetyo
