<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContatoController extends Controller
{
    public function create()
    {
        // Aqui você pode implementar a lógica para exibir o formulário de criação de contato
        return view('novo_contato_form');
    }
}
