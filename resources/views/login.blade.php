<html>

<head>

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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-7ldRLvZcqrPz31+7ZzZtN+Pc31HQFVRCfr7+BhWYHFrULgsLIZRA72jh2ueg2jqZarC93XU9UwV8AEqMjm01g==" crossorigin="anonymous" referrerpolicy="no-referrer" />




    </head>
</head>

<body>
    <h3 style="text-align: center">Sistema de Gerenciamento de contatos</h3>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          

        </div>
    </nav>
    <div class="row">
        <div class="col-12">
            <div class="card" style="center:align">
                <div class="card-body">

                    
                        <h4 class="card-title">CADASTRO DE PESSOA</h4>
                        <p class="card-title-desc">Preencha o formulário</p>
                        <hr />
                        <form method="POST" action="{{ route('login') }}">
                            @csrf
                            <label for="email">E-mail:</label>
                            <input type="email" name="email" id="email" required><br>
                            <label for="password">Senha:</label>
                            <input type="password" name="password" id="password" required><br>
                            <button type="submit">Entrar</button>
                        </form>

                </div>
            </div>
        </div>
    </div>
    @if(session('error'))
    <div style="color: red;">{{ session('error') }}</div>
    @endif


    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous">
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.10/jquery.mask.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-7ldRLvZcqrPz31+7ZzZtN+Pc31HQFVRCfr7+BhWYHFrULgsLIZRA72jh2ueg2jqZarC93XU9UwV8AEqMjm01g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <script type="text/javascript" src="/js/app.js"></script>

    @yield('conteudo')
</body>

</html>