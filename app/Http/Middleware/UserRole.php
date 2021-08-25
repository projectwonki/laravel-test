<?php

namespace App\Http\Middleware;

use Closure;

class UserRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $roleName)
    {
        if(! $request->user()->hasRole($roleName))
        {
            $response = [
                'success' => false,
                'message' => 'kamu tidak punya izin untuk mengakses ini!'
            ];
            return response()->json($response, 403);
        }
        return $next($request);
    }
}
