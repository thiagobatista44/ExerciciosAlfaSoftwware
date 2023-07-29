<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        if ($request->isMethod('post')) {
            return $this->authenticate($request);
        }
        return view('auth');
    }
    public function authenticate(Request $request)
{
    $credentials = $request->only('email', 'password');
    if (Auth::attempt($credentials)) {
        // Se a autenticação for bem-sucedida, redirecione para a página inicial ou outra página de sua escolha.
        return redirect()->intended('/dashboard');
    } else {
        // Se a autenticação falhar, redirecione de volta para a tela de login com uma mensagem de erro.
        return redirect()->route('login')->with('error', 'Credenciais inválidas.');
    }
}

}
