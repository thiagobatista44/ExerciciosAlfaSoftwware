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
        return view('listar_contato_existente', compact('pessoas'));
    }

    public function indexDetalhe()
    {
       
        $pessoas = Pessoa::all();
        return view('lista_detalhada', compact('pessoas'));
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

    public function destroy(Request $request)
    {

        try {
            // Localizar a pessoa pelo ID
            $pessoa = Pessoa::findOrFail($request->id);

            // Excluir a pessoa do banco de dados
            $pessoa->delete();

            $response['resultado'] = 'OK';
            $response['title'] = 'Pessoa Excluída com Sucesso';
            $response['text'] = 'Dados Atualizados';
            return $response;
        } catch (\Exception $e) {
            $response['resultado'] = 'ERRO';
            $response['title'] = 'ERRO AO CADASTRAR INFORMAÇÕES';
            $response['text'] = $e->getMessage();
            return $response;
        }
    }
    
}
