<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class SuplierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showAll()
    {
        try {

            $supplier_ist = array();

            $suppliers = Supplier::all();

            if ($suppliers->count() > 0) {

                foreach ($suppliers as $key_su => $row_su) {

                    $supplier_ist[$key_su] = array(
                        'id' => $row_su->id,
                        'name' => $row_su->name,
                        'email' => $row_su->email,
                        'is_active' => ($row_su->is_active == '1' ? 'Yes' : 'No'),
                    );

                }

                $response = [
                    'code' => '200',
                    'success' => false,
                    'message' => 'Berhasil menampilkan daftar supplier',
                    'data' => $supplier_ist,
                ];
                return response()->json($response, 200);

            } else {

                $response = [
                    'code' => '201',
                    'success' => false,
                    'message' => 'Daftar supplier kosong',
                ];
                return response()->json($response, 200);

            }

        } catch(\Exception $e) {

            return response()->json($e->getMessage(), 400);
            throw new BadRequestHttpException();

        }
    }

    public function getAllProductsBySupplierId($supplierid)
    {
        try {

            $product_list = array();

            $products = Product::where('supplier_id', $supplierid)->get();

            if ($products->count() > 0) {

                foreach ($products as $key_pr => $row_pr) {

                    $product_list[$key_pr] = array(
                        'supplier_id' => $row_pr->supplier->id,
                        'product_id' => $row_pr->id,
                        'name' => $row_pr->name,
                        'stock' => $row_pr->stock,
                        'is_active' => ($row_pr->is_active == '1' ? 'Yes' : 'No'),
                    );

                }

                $data_supplier = array();

                $supplier = Supplier::find($supplierid);

                if ($supplier !== null) {

                    $data_supplier['name'] = $supplier->name;
                    $data_supplier['email'] = $supplier->email;
                    $data_supplier['is_active'] = ($supplier->is_active == '1' ? 'Yes' : 'No');

                }

                $response = [
                    'code' => '200',
                    'success' => false,
                    'message' => 'Berhasil menampilkan daftar supplier',
                    'supplier' => $data_supplier,
                    'data' => $product_list,
                ];
                return response()->json($response, 200);

            } else {

                $response = [
                    'code' => '201',
                    'success' => false,
                    'message' => 'Daftar produk untuk supplier tersebut kosong',
                ];
                return response()->json($response, 200);

            }


        } catch(\Exception $e) {

            return response()->json($e->getMessage(), 400);
            throw new BadRequestHttpException();

        }
    }

    public function getAllApproveOrderProducts($status)
    {
        try {

            if ($status == 'approve') {
                $is_active = '1';
                $message = 'sudah';
            } elseif ($status == 'disapprove') {
                $is_active = '0';
                $message = 'belum';
            }

            $product_order = array();

            $order = Order::where('is_active', $is_active)->get();

            if ($order->count() > 0) {

                foreach ($order as $key_or => $row_or) {

                    $product_order[$key_or] = array(
                        'store_id' => $row_or->store_id,
                        'store_name' => $row_or->store->name,
                        'product_id' => $row_or->product_id,
                        'product_name' => $row_or->product->name,
                        'supplier_id' => $row_or->product->supplier->id,
                        'supplier_name' => $row_or->product->supplier->name,
                        'order_total' => $row_or->order,
                        'current_stock' => $row_or->product->stock,
                    );

                }

                $response = [
                    'code' => '200',
                    'success' => false,
                    'message' => 'Berhasil menampilkan daftar produk yang sudah diorder dan yang '.$message.' diapprove',
                    'data' => $product_order,
                ];
                return response()->json($response, 200);

            } else {

                $response = [
                    'code' => '201',
                    'success' => false,
                    'message' => 'Daftar supplier kosong',
                ];
                return response()->json($response, 200);

            }

        } catch(\Exception $e) {

            return response()->json($e->getMessage(), 400);
            throw new BadRequestHttpException();

        }
    }
}
