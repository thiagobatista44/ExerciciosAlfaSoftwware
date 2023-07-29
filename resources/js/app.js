$(document).ready(function () {

  
    $("#telefone").mask("(99) 9999-99999");
    


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

    $("#nova_pessoa_reset").click(function (event) {
        event.preventDefault();
        $(".btn_salvar").css("display", "");
        $(".btn_atualizar").css("display", "none");
        $("#rua_endereco").val("");
        $("#cep").val("");
        $("#bairro").val('');
        $("#cidade").val("");
        $("#uf").val("");
        $("#nome_cadastro").val("");
        $("#numero").val("");
        $("#CPF").val("");
    });

    $("#nova_conta_reset").click(function (event) {
        event.preventDefault();
        $(".select_pessoa_conta").css("display", "");
        $(".pessoa_conta_selecionada").css("display", "none");
        $("#pessoa_conta").val("");
        $("#conta").val("");
        $(".btn_salvar").css("display", "");
        $(".btn_atualizar").css("display", "none");

    });

    //   atulizar dados dentro do Form
    $("#listar_pessoas_conta").on(
        "click",
        ".editPerson",
        function (event) {
            event.preventDefault();
            $(".btn_salvar").css("display", "none");
            $(".btn_atualizar").css("display", "");
            var cpf = $(this)
                .closest("tr")
                .find("td:eq(1)")
                .text();

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
                    "/atualizaFormPerson",
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    )
                },
                type: "POST",
                data: {
                    cpf
                },
                dataType: "json",
                success: function (data) {
                    if (data.resultado == "OK") {
                        swal.fire({
                            icon: "success",
                            title: "Pessoa Encontrada",

                        });
                        $("#rua_endereco").val(data.dados.logradouro);
                        $("#cep").val(data.dados.cep);
                        $("#bairro").val(data.dados.bairro);
                        $("#cidade").val(data.dados.municipio);
                        $("#uf").val(data.dados.estado);
                        $("#nome_cadastro").val(data.dados.nome);
                        $("#numero").val(data.dados.numero);
                        $("#CPF").val(data.cpf).mask('000.000.000-00', { reverse: true });
                        console.log(data.dados);

                    } else if (data.resultado == "ERRO") {
                        swal.fire({
                            icon: "warning",
                            title: "ERRO NA REQUISIÇÃO!",
                            text: data.text
                        });
                        console.log(data.dados);
                    }
                },
                error: function (data) {
                    swal.fire({
                        icon: "warning",
                        title: "ERRO NA REQUISIÇÃO!",
                        text: data.text
                    });
                    console.log(data.dados);
                }
            });


        }
    );

    // salvar conta form das contas 
    $("#Button_save_count").on("click", function (event) {
        event.preventDefault();
        var data = {};
        var valid = 0;
        $.each(
            $("#form_new_count").serializeArray(),
            function (i, field) {
                data[field.name] = field.value;
                if (field.value != "") {
                    valid++;
                }

            }
        );

        console.log(valid);
        if (valid < 2) {
            swal.fire({
                icon: 'warning',
                title: "Exite Campo(s) vazio(s).",
                text: "Por favor, preencha Todos os campos"
            });

            return false;
        }

        console.log(data);
        swal.fire({
            icon: "info",
            title: "Processando requisição",
            text: "Aguarde o final da operação, isto pode demorar um pouco!",
            allowOutsideClick: false
        });
        swal.showLoading();
        $.ajax({
            url:
                "/saveCount",
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

    $("#listar_conta_table").on(
        "click",
        ".deleteCount",
        function (event) {
            event.preventDefault();
            var conta = $(this)
                .closest("tr")
                .find("td:eq(2)")
                .text();

            swal.fire({
                icon: 'warning',
                title:
                    "Deseja excluir a conta bancária de nº  " +
                    conta +
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
                            "/deleteCount",
                        headers: {
                            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                                "content"
                            )
                        },
                        type: "POST",
                        data: {
                            conta
                        },
                        dataType: "json",
                        success: function (data) {
                            if (data.resultado == "OK") {
                                swal.fire({
                                    icon: "success",
                                    title: "Conta Encontrada",
                                    text: "Conta Removida do sistema com sucesso."
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

    $("#listar_conta_table").on(
        "click",
        ".editCount",
        function (event) {
            event.preventDefault();
            $(".btn_conta_atualizar").css("display", "");
            $(".btn_salvar").css("display", "none");
            $(".select_pessoa_conta").css("display", "none");
            $(".pessoa_conta_selecionada").css("display", "");
            var conta = $(this)
                .closest("tr")
                .find("td:eq(2)")
                .text();

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
                    "/atualizaFormCount",
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    )
                },
                type: "POST",
                data: {
                    conta
                },
                dataType: "json",
                success: function (data) {
                    if (data.resultado == "OK") {
                        swal.fire({
                            icon: "success",
                            title: "Pessoa Encontrada",

                        });

                        $("#pessoa_conta_select").val(data.dados.nome + ' - ' + data.dados.cpf);
                        $("#conta").val(data.dados.NumeroConta);

                        console.log(data.dados);

                    } else if (data.resultado == "ERRO") {
                        swal.fire({
                            icon: "warning",
                            title: "ERRO NA REQUISIÇÃO!",
                            text: data.text
                        });
                        console.log(data.dados);
                    }
                },
                error: function (data) {
                    swal.fire({
                        icon: "warning",
                        title: "ERRO NA REQUISIÇÃO!",
                        text: data.text
                    });
                    console.log(data.dados);
                }
            });


        }
    );





});

$("#nome_cadastro").keyup(function () {

    var texto = $("#nome_cadastro").val()

    texto = texto.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });
    $("#nome_cadastro").val(texto);
});


$("#pessoa_conta_movimento").change(function () {
    var data = {};
    var valid = 0;
    console.log(data);
    $.each(
        $("#form_moviment").serializeArray(),
        function (i, field) {
            data[field.name] = field.value;
            if (field.value != "") {
                valid++;
            }
        }
    );

    var nomeCliente = $(
        "#form_moviment option:selected"
    ).attr("data-nomeCliente");
    var cpf = $(
        "#form_moviment option:selected"
    ).attr("data-cpf");

    console.log(data, valid, nomeCliente, cpf);
    swal.fire({
        type: "info",
        title: "Processando requisição",
        text: "Aguarde o final da operação, isto pode demorar um pouco!",
        allowOutsideClick: false
    });
    swal.showLoading();
    $.ajax({
        url:
            "/listarMoviment",
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
        },
        data: {
            data,
            nomeCliente,
            cpf
        },
        type: "POST",
        dataType: "json",

        success: function (data) {
            if (data.resultado == "OK") {
                $("#conta_movimento")
                    .children()
                    .remove();
                swal.fire({
                    type: "success",
                    title: data.title,
                    text: data.text
                }),

                    data.dados.forEach(function (conta) {
                        $("#conta_movimento").append(
                            '<option value="' +
                            '">CONTA : ' +
                            conta.NumeroConta +
                            " / SALDO : " +
                            conta.saldo +
                            "</option>"
                        );

                        swal.close();
                    });

                console.log(data);

            } else {
                swal.fire({
                    type: "error",
                    title: data.title,
                    text: data.text
                });
                console.log(data.error);
            }
        },
        error: function (data) {
            swal.fire({
                type: "warning",
                title: "Erro",
                text:
                    "Não foi possivel realizar esta operação, tente novamente.",
                allowOutsideClick: true
            });
        }
    });
});

$('#conta_movimento').change(function () {

    // listar extratos bancários
    var saldo = $("#conta_movimento option:selected").text();
    var data = {};
   
    swal.fire({
        type: "info",
        title: "Processando requisição",
        text: "Aguarde o final da operação, isto pode demorar um pouco!",
        allowOutsideClick: false
    });
    swal.showLoading();
    $.ajax({
        url:
            "/extratoMoviment",
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
        },
        data: {
            data,
            saldo
        },
        type: "POST",
        dataType: "json",

        success: function (data) {
            if (data.resultado == "OK") {
                var element = data.extrato;
                swal.fire({
                    type: "success",
                    title: data.title,
                    text: data.text
                }),
                extratoTabela.clear().draw();

                data.dados.forEach(function(values) {
                        if (values.data) {
                            var row = [
                                "<i class='fas fa-check' style='color: green'></i>"
                            ];
                        } else {
                            var row = [
                                "<i class='fas fa-times-circle' style='color: red'></i>"
                            ];
                        }

                        row.push(
                            values.data,
                            values.valor,
                           
                        );

                        extratoTabela.row
                            .add(row)
                            .draw();

                        swal.close();
                    });
               
            }
             else {
                swal.fire({
                    type: "error",
                    title: data.title,
                    text: data.text
                });
                console.log(data.error);
            }
        },
        error: function (data) {
            swal.fire({
                type: "warning",
                title: "Erro",
                text:
                    "Não foi possivel realizar esta operação, tente novamente.",
                allowOutsideClick: true
            });
        }
    });



});

// salvar movimentação da conta 

$("#Button_save_moviment").on("click", function (event) {
    event.preventDefault();
    var data = {};
    var valid = 0;
    $.each(
        $("#form_moviment").serializeArray(),
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
    console.log(data, data.conta_movimento);
    if (data.pessoa_conta_movimento == "Selecione uma pessoa" || data.conta_movimento == "Selecione uma conta") {
        swal.fire({
            icon: 'warning',
            title: "Selecione um cliente e uma conta",
            text: "Por favor, Escolha um cliente e conta para fazer a movimentação"
        });

        return false;

    }
    var saldo = $("#conta_movimento option:selected").text();
    console.log(saldo);

    swal.fire({
        icon: "info",
        title: "Processando requisição",
        text: "Aguarde o final da operação, isto pode demorar um pouco!",
        allowOutsideClick: false
    });
    swal.showLoading();
    $.ajax({
        url:
            "/saveMoviment",
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
        },
        data: {
            data,
            saldo
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


