<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8" name="csrf-token" content="{{ csrf_token() }}">
  
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

<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    
                    <li class="nav-item">
                        <a class="nav-link" href="/home">Home</a>
                    </li>
                </ul>
            </div>
      
    </nav>


    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">CADASTRO DE USUÁRIO</h4>
                    <p class="card-title-desc">Preencha o formulário</p>
                    <hr />

                    <form id="form_new_person">
                        <div class="row col-12">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="nome_cadastro">Nome :</label>
                                    <input type="text" id="nome" name="nome" class="form-control"
                                        data-parsley-maxlength='100' data-parsley-trigger="focusout" autocomplete="off"
                                        value='' required>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-group">
                                    <label for="telefone">Contato :</label>
                                    <input type="text" id="telefone" name="telefone" class="form-control"
                                    placeholder="(99)9999-9999"
                                        data-parsley-maxlength='11' data-parsley-trigger="focusout" autocomplete="off"
                                        value='' required>
                                </div>
                            </div>

                            <div class="col-4">
                                <div class="form-group">
                                    <label for="emailForm">E-mail :</label>
                                    <input class="form-control" id="email" name='email'type="email" class="form-control"
                                    placeholder="name@example.com" required/>
                                </div>


                            </div>
                            
                        </div>
                        <hr />

                        <div class='row col-12' style="">
                            <div class="btn_salvar">
                                <button id='Button_new_person' type="submit" class="btn btn-primary">SALVAR</button>
                            </div>

                            <div class="btn_atualizar" style='display:none;'>
                                <button id='Button_update_person' type="submit"
                                    class="btn btn-success">ATUALIZAR</button>
                                <button id='nova_pessoa_reset' style='position:relative; left:1%' class="btn btn-danger"
                                    type="reset">LIMPAR </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>




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



    @yield('conteudo')
</body>




</html>