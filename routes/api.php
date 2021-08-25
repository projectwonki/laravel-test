<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('store')->group(function () {

    Route::post('registration', 'Api\StoreController@register');

    Route::post('email/verification', 'Api\StoreController@verification');

    Route::post('login', 'Api\StoreController@login');

    Route::group(['middleware' => ['jwt.auth','role:store']], function () {

        Route::post('reset-password', 'Api\StoreController@resetPassword');

        Route::get('suppliers', 'Api\SupplierController@showAll');

        Route::get('products/{supplierid}', 'Api\SupplierController@getAllProductsBySupplierId');

        Route::post('orders', 'Api\OrderController@store');

        Route::get('products/order/{status}', 'Api\SupplierController@getAllApproveOrderProducts');

    });

});


