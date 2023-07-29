$(document).ready(function () {

  
    $("#telefone").mask("(99)9999-99999");
    $("#telefoneEdit").mask("(99)9999-99999");

    // Função para validar o campo de e-mail
    function validarEmail(email) {
        // Expressão regular para verificar se o campo contém um e-mail válido
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Evento blur para verificar a validade do e-mail quando o campo perder o foco
    $('#email').on('blur', function() {
        var email = $(this).val();
        if (!validarEmail(email)) {
            swal.fire({
                icon: "warning",
                title: "O e-mail digitado é inválido",
                text: "digite um e-mail válido contento '@' e o provedor"
            });
        }
    })

    $('#emailEdit').on('blur', function() {
        var email = $(this).val();
        if (!validarEmail(email)) {
            swal.fire({
                icon: "warning",
                title: "O e-mail digitado é inválido",
                text: "digite um e-mail válido contento '@' e o provedor"
            });
        }
    })

    $("#listar_pessoas_conta").on(
        "click",
        ".deletePerson",
        function (event) {
            event.preventDefault();
            var id = $(this)
                .closest("tr")
                .find("td:eq(0)")
                .text();

                var nome = $(this)
                .closest("tr")
                .find("td:eq(1)")
                .text();

            swal.fire({
                icon: 'warning',
                title:
                    "Deseja excluir os dados da pessoa " +
                    nome +
                    " do Sistema? ",
                allowOutsideClick: false,
                showCancelButton: true,
                cancelButtonText: "NÃO",
                cancelButtonColor: "#ed5048",
                confirmButtonText: "SIM",
                confirmButtonColor: "#33733f"
            }).then(result => {
                if (result.value) {
                    swal.fire({
                        icon: "info",
                        title: "Localizando Pessoa",
                        text:
                            "Aguarde o final da operação, isto pode demorar um pouco!",

                        allowOutsideClick: false
                    });
                    swal.showLoading();
                    $.ajax({
                        url:
                            "/deletePerson",
                        headers: {
                            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                                "content"
                            )
                        },
                        type: "POST",
                        data: {
                            id
                        },
                        dataType: "json",
                        success: function (data) {
                            if (data.resultado == "OK") {
                                swal.fire({
                                    icon: "success",
                                    title: "Pessoa Removida",
                                    text: "Pessoa Removida do sistema com sucesso."
                                });
                                window.location.reload();
                            } else if (data.resultado == "ERRO") {
                                swal.fire({
                                    icon: "warning",
                                    title: "ERRO NA REQUISIÇÃO!",
                                    text: data.text
                                });
                            }
                        },
                        error: function (data) {
                            swal.fire({
                                icon: "warning",
                                title: "ERRO NA REQUISIÇÃO!",
                                text: data.text
                            });
                        }
                    });
                }
            });
        }
    );

    // salvar Pessoa 
    $("#Button_new_person").on("click", function (event) {
        event.preventDefault();
        var data = {};
        var valid = 0;
        $.each(
            $("#form_new_person").serializeArray(),
            function (i, field) {
                data[field.name] = field.value;
                if (field.value != "") {
                    valid++;
                }

            }
        );

        console.log(valid);
        if (valid < 3) {
            swal.fire({
                icon: 'warning',
                title: "Exite Campo(s) vazio(s).",
                text: "Por favor, preencha Todos os campos"
            });

            return false;
        }

        swal.fire({
            icon: "info",
            title: "Processando requisição",
            text: "Aguarde o final da operação, isto pode demorar um pouco!",
            allowOutsideClick: false
        });
        swal.showLoading();
        $.ajax({
            url:
                "/CreatePessoas",
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
            },
            data: {
                data
            },
            type: "POST",
            dataType: "json",

            success: function (data) {
                if (data.resultado == "OK") {
                    swal.fire({
                        icon: 'success',
                        title: data.title,
                        text: data.text
                    }),
                        location.reload();
                } else {
                    swal.fire({
                        icon: 'warning',
                        type: "error",
                        title: data.title,
                        text: data.text
                    });
                    console.log(data.error);
                }
            },
            error: function (data) {
                swal.fire({
                    icon: 'warning',
                    title: "Erro",
                    text:
                        "Não foi possivel realizar esta operação, tente novamente.",
                    allowOutsideClick: true
                });
                console.log(data);
            }
        });
    });


    // Atualizar Pessoa
    $("#btn_atualizar").on("click", function (event) {
        event.preventDefault();
        var data = {};
        var valid = 0;
        $.each(
            $("#form_new_person_atualizar").serializeArray(),
            function (i, field) {
                data[field.name] = field.value;
                if (field.value != "") {
                    valid++;
                }

            }
        );

        console.log(valid);
        if (valid < 3) {
            swal.fire({
                icon: 'warning',
                title: "Exite Campo(s) vazio(s).",
                text: "Por favor, preencha Todos os campos"
            });

            return false;
        }

        swal.fire({
            icon: "info",
            title: "Processando requisição",
            text: "Aguarde o final da operação, isto pode demorar um pouco!",
            allowOutsideClick: false
        });
        swal.showLoading();
        $.ajax({
            url:
                "/UpdatePessoas",
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
            },
            data: {
                data
            },
            type: "POST",
            dataType: "json",

            success: function (data) {
                if (data.resultado == "OK") {
                    swal.fire({
                        icon: 'success',
                        title: data.title,
                        text: data.text
                    }),
                    window.location.href = "/listarPessoasDetalhada";
                } else {
                    swal.fire({
                        icon: 'warning',
                        type: "error",
                        title: data.title,
                        text: data.text
                    });
                    console.log(data.error);
                }
            },
            error: function (data) {
                swal.fire({
                    icon: 'warning',
                    title: "Erro",
                    text:
                        "Não foi possivel realizar esta operação, tente novamente.",
                    allowOutsideClick: true
                });
                console.log(data);
            }
        });
    });


});









