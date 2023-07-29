<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pessoa;

class PessoaController extends Controller
{
    public function index()
    {
       
        $pessoas = Pessoa::all();

       
        return view('pessoas.index', compact('pessoas'));
    }

    public function store(Request $request)
    {
      
        $dados = $request->data;

      
      
        try {
            // Criar uma nova pessoa no banco de dados
            Pessoa::create([
                'nome' => $dados['nome'],
                'email' => $dados['emailForm'],
                'telefone' => $dados['telefone'],
            ]);

            $response['resultado'] = 'OK';
            $response['title'] = 'Pessoa Cadastrada com Sucesso';
            $response['text'] = 'Dados Salvos';
            return $response;
        } catch (\Exception $e) {
            $response['resultado'] = 'ERRO';
            $response['title'] = 'ERRO AO CADASTRAR INFORMAÇÕES';
            $response['text'] = $e->getMessage();
            return $response;
        }
    }
    
}
