<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;


class AuthController extends Controller
{
    use AuthenticatesUsers;
    public function login()
    {
        return view('login');
    }
    public function authenticate(Request $request)
{

    $credentials = $request->only('email', 'password');
    if (Auth::attempt($credentials)) {
        return $this->sendLoginResponse($request);
    } else {
        $response['resultado'] = 'O login encontra-se dentro do DatabaseSeeder';
            $response['Para logar no sistema use o e-mail '] = 'teste@example.com';
            $response['e a senha'] = 'senha123';
            return $response;
            return $this->sendFailedLoginResponse($request);
    }
}


}
