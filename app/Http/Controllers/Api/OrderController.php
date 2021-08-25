<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Order;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class OrderController extends Controller
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
        try{

            $data_request =json_decode(json_encode($request->all()),TRUE);

            if ($data_request === []) {

                $response = [
                    'code' => '201',
                    'success' => false,
                    'message' => 'data order kosong',
                ];
                return response()->json($response, 200);

            }

            foreach ($data_request as $key_dr => $row_dr) {

                $new_order = new Order;

                $new_order->store_id = \Auth::guard('store')->id();
                $new_order->product_id = $row_dr['product_id'];
                $new_order->order = $row_dr['order_total'];
                $new_order->is_approve = 0;
                $new_order->created_at = date('Y-m-d H:i:s');
                $new_order->save();

            }

            $response = [
                'code' => 200,
                'success' => true,
                'message' => 'Input order product berhasil. Supplier akan melakukan approval terlebih dahulu',
            ];

            return response()->json($response, 200);

        } catch(\Exception $e) {
            return response()->json($e->getMessage(), 400);
            throw new BadRequestHttpException();
        }

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
}
