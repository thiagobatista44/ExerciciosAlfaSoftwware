<!DOCTYPE html>
<html>
    <head>

        <meta charset="utf-8" name="csrf-token" content="{{ csrf_token() }}">
        <title>@yield('titulo', 'Cadastro e Movimentação de Contas')</title>
        <style media="screen"> </style>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    </head>
<body>

    

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                
                <li class="nav-item">
                    <a class="nav-link" href="/home">Home</a>
                </li>
              
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mais Opções
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                       
                        <a class="dropdown-item" href="{{ route("NewContact") }}">Adicionar novos Contatos</a>
                        <a class="dropdown-item" href="{{ route("listarPessoas")}}">Listar de Contatos Existentes</a>
                        <a class="dropdown-item" href="{{ route("listarPessoasDetalhada")}}">Detalhes dos Contatos</a>
                        
                        <div class="dropdown-divider"></div>
                        <form method="POST" action="{{ route('logout') }}">
                            @csrf
                            <a class="header-sign-out">
                                <button class="btn btn-danger " type="submit"></i><span class="d-sm-inline">Sair</span>
                                </button>
                            </a>
                        </form>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>



<!-- Inclua o JavaScript do Bootstrap para habilitar o funcionamento do menu -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.1/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<!-- Inclua o JavaScript do Bootstrap -->
@vite(['resources/css/app.css', 'resources/js/app.js'])

</body>
</html>