<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Store;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use JWTAuth;
use Illuminate\Support\Arr;

class StoreController extends Controller
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
     * login authentification for Store.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $credentials = request(['email', 'password']);
        $credentials = Arr::add($credentials, 'is_active', '1');

        if($token = JWTAuth::attempt($credentials))
        {
            $data['token'] = $token;

            $response = [
                'code' => '200',
                'success' => true,
                'message' => 'Selamat, Anda berhasil login',
                'data' => $data
            ];
            return response()->json($response, 200);

        } else {

            $response = [
                'code' => '201',
                'success' => false,
                'message' => 'Email atau Password salah'
            ];
            return response()->json($response, 200);

        }
    }

    /**
     * newly created store in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        try{

            $data_request =json_decode(json_encode($request->all()),TRUE);
            $validator = Validator::make($request->all(), [
                'email' => 'required|email|unique:App\Models\Store,email',
                'password' => [
                        'required',
                        'min:8',             // must be at least 10 characters in length
                        // 'regex:/[a-z]/',      // must contain at least one lowercase letter
                        // 'regex:/[A-Z]/',      // must contain at least one uppercase letter
                        // 'regex:/[0-9]/',      // must contain at least one digit
                    ],
                'password_confirmation' => 'required|same:password',
            ],
            [
                'email.required' => 'Email Wajib diisi',
                'email.unique' => 'Email anda sudah register silahkan login',
                'email.email' => 'Format email tidak sesuai',
                'password.required' => 'Password Wajib Diisi',
                'password.min' => 'Maaf kata sandi tidak sesuai kriteria. Kata sandi 8 karakter, ada huruf, angka dan huruf besar',
                'password.regex' => 'Maaf kata sandi tidak sesuai kriteria. Kata sandi 8 karakter, ada huruf, angka dan huruf besar',
            ]);

            if($validator->fails()) {

                $error = $validator->errors()->first();
                $response = [
                    'code' => '201',
                    'success' => false,
                    'message' => $error
                ];
                return response()->json($response, 200);

            } else {

                $new_store = new Store;

                $explode_email = explode('@',$request->email);
                $name = $explode_email[0];

                $new_store->name = $name;
                $new_store->email = $data_request['email'];
                $new_store->password = bcrypt($data_request['password']);
                $new_store->random_code = str::random(5);
                $new_store->is_active = 0;
                $new_store->created_at = date('Y-m-d H:i:s');
                $new_store->save();

                $to_name = $new_store->name;
                $to_email = $new_store->email;
                $sendData = array(
                    "id" => $new_store->id,
                    "name"=> $new_store->name,
                    "email" => $new_store->email,
                    "random_code" => $new_store->random_code
                );
                Mail::send('email.confirm_email', $sendData, function($message) use ($to_name, $to_email) {
                    $message->to($to_email, $to_name)
                    ->subject("Register Toko");
                    $message->from('noreply@gmail.com','Toko Umat');
                });

                $response = [
                    'code' => 200,
                    'success' => true,
                    'message' => 'Selamat, Pendaftaran toko berhasil. Silahkan Konfirmasi melalui email',
                ];
                return response()->json($response, 200);

            }

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

    /**
     * verification store
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function verification(Request $request)
    {
        try{

            $check_verification = Store::whereEmail($request->email)->where('random_code', $request->random_code)->first();

            if ($check_verification === null) {

                $response = [
                    'code' => '201',
                    'success' => false,
                    'message' => 'email atau random code invalid untuk verifikasi toko',
                ];
                return response()->json($response, 200);

            }

            $update_store = Store::find($check_verification->id);

            $update_store->random_code = str::random(5);
            $update_store->is_active = 1;
            $update_store->updated_at = date('Y-m-d H:i:s');
            $update_store->email_verified_at = date('Y-m-d H:i:s');
            $update_store->save();

            $response = [
                'code' => 200,
                'success' => true,
                'message' => 'Selamat, akun toko anda sudah terverifikasi',
            ];
            return response()->json($response, 200);

        } catch(\Exception $e) {
            return response()->json($e->getMessage(), 400);
            throw new BadRequestHttpException();
        }
    }

    public function resetPassword(Request $request)
    {
        try {

            $data_request =json_decode(json_encode($request->all()),TRUE);
            $validator = Validator::make($request->all(), [
                'email' => 'required|email',
                'new_password' => [
                        'required',
                        'min:8',             // must be at least 10 characters in length
                        // 'regex:/[a-z]/',      // must contain at least one lowercase letter
                        // 'regex:/[A-Z]/',      // must contain at least one uppercase letter
                        // 'regex:/[0-9]/',      // must contain at least one digit
                    ],
                'password_confirmation' => 'required|same:new_password',
            ],
            [
                'email.required' => 'Email Wajib diisi',
                // 'email.unique' => 'Email anda sudah register silahkan login',
                // 'email.email' => 'Format email tidak sesuai',
                'password.required' => 'Password Wajib Diisi',
                'password.min' => 'Maaf kata sandi tidak sesuai kriteria. Kata sandi 8 karakter, ada huruf, angka dan huruf besar',
                'password.regex' => 'Maaf kata sandi tidak sesuai kriteria. Kata sandi 8 karakter, ada huruf, angka dan huruf besar',
            ]);

            if($validator->fails()) {

                $error = $validator->errors()->first();
                $response = [
                    'code' => '201',
                    'success' => false,
                    'message' => $error
                ];
                return response()->json($response, 200);

            }

            $reset_password = Store::whereEmail($data_request['email'])->first();

            if ($reset_password !== null) {

                $new_password = Store::find($reset_password->id);

                $new_password->password = bcrypt($data_request['new_password']);
                $new_password->random_code = str::random(5);
                $new_password->updated_at = date('Y-m-d H:i:s');
                $new_password->save();

                $response = [
                    'code' => 200,
                    'success' => true,
                    'message' => 'Password akun toko kamu berhasil diubah',
                ];
                return response()->json($response, 200);


            } else {

                $response = [
                    'code' => '201',
                    'success' => false,
                    'message' => 'email akun toko tidak diketahui',
                ];
                return response()->json($response, 200);

            }

        } catch(\Exception $e) {
            return response()->json($e->getMessage(), 400);
            throw new BadRequestHttpException();
        }
    }
}
