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
            @vite(['resources/css/app.css', 'resources/js/app.js'])

    </head>
</head>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container d-flex justify-content-center align-items-center">
        <h2 class="text-center m-0">Sistema de Gerenciamento de Contatos</h2>
    </div>
</nav>

<body class="bg-primary" style="margin-top: 2%">
    <main>
        <div class="container align-items-center">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="card shadow-lg border-0 rounded-lg mt-6">
                        <div class="card-header">
                            <h3 class="text-center" style="color:black">Credenciais</h3>
                        </div>
                        <div class="card-body">
                            <form method="POST" action="{{ route('login') }}">
                                @csrf
                                <div class="form-floating mb-3">
                                    <input class="form-control" id="email" name='email'type="email"
                                        placeholder="name@example.com" />
                                    <label for="inputEmail">Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input class="form-control" id="password" name='password' type="password"
                                        placeholder="Password" />
                                    <label for="inputPassword">Password</label>
                                </div>
                                <div class="form-floating mb-3 " align='center'>
                                    <button class="btn btn-primary " type="submit">Entrar</button>
                                </div>

                            </form>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>



</body>

</html>