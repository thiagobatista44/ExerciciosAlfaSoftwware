<!DOCTYPE html>
<html>
<head>
    <title>Menu Suspenso</title>
    <!-- Inclua o CSS do Bootstrap (ou outro framework de sua escolha) para estilizar o menu -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <!-- Loop para exibir os links do menu -->
                <li class="nav-item">
                    <a class="nav-link" href="">Home</a>
                </li>
                <!-- Menu suspenso -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mais Opções
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <!-- Adicione aqui mais links para o menu suspenso -->
                        <a class="dropdown-item" href="#">Listar de Contatos Existentes</a>
                        <a class="dropdown-item" href="#">Adicionar novos Contatos</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Detalhes dos Contatos</a>
                        <a class="dropdown-item" href="/">Logout</a>
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

</body>
</html>