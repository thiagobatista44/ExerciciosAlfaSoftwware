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

        // Verificar se o usuário já está cadastrado pelo e-mail
    $email = $dados['email'];
    $telefone = $dados['telefone'];
    $userExists = Pessoa::where('email', $email)->orWhere('telefone', $telefone)->exists();

    if ($userExists) {
        $response['resultado'] = 'ERRO';
            $response['title'] = 'ERRO AO CADASTRAR INFORMAÇÕES';
            $response['text'] = "O email ou Telefone informado já foi cadastrado por outro usuário";
            return $response;

    }

        try {
            // Criar uma nova pessoa no banco de dados
            Pessoa::create([
                'nome' => $dados['nome'],
                'email' => $dados['email'],
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

    public function edit($id)
    {
        // Localizar a pessoa pelo ID
        $pessoa = Pessoa::findOrFail($id);
        // Retornar uma view que exibe o formulário de edição com os dados da pessoa
        return view('contatos_telaEdicao', compact('pessoa'));
    }

    public function update(Request $request)
    {

        $dados = $request->data;
        try {
            // Localizar a pessoa pelo ID
            $pessoa = Pessoa::findOrFail($dados['id']);

            // Preencher a instância da pessoa com os novos dados do formulário
            $pessoa->fill($dados);

            // Salvar as alterações no banco de dados
            $pessoa->save();

            $response['resultado'] = 'OK';
            $response['title'] = 'Pessoa Atualizados com Sucesso';
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
