$(document).ready(function(){$("#telefone").mask("(99) 9999-9999[9]"),$("#listar_pessoas_conta").on("click",".deletePerson",function(n){n.preventDefault();var a=$(this).closest("tr").find("td:eq(1)").text();swal.fire({icon:"warning",title:"Deseja excluir os dados da pessoa do CPF "+a+" do Sistema? ",allowOutsideClick:!1,showCancelButton:!0,cancelButtonText:"NÃO",cancelButtonColor:"#ed5048",confirmButtonText:"SIM",confirmButtonColor:"#33733f"}).then(e=>{e.value&&(swal.fire({icon:"info",title:"Localizando Pessoa",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/deletePerson",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},type:"POST",data:{cpf:a},dataType:"json",success:function(o){o.resultado=="OK"?(swal.fire({icon:"success",title:"Pessoa Encontrada",text:"Pessoa Removida do sistema com sucesso."}),window.location.reload()):o.resultado=="ERRO"&&swal.fire({icon:"warning",title:"ERRO NA REQUISIÇÃO!",text:o.text})},error:function(o){swal.fire({icon:"warning",title:"ERRO NA REQUISIÇÃO!",text:o.text})}}))})}),$("#Button_new_person").on("click",function(n){n.preventDefault();var a={},e=0;if($.each($("#form_new_person").serializeArray(),function(o,t){a[t.name]=t.value,t.value!=""&&e++}),console.log(e),e<3)return swal.fire({icon:"warning",title:"Exite Campo(s) vazio(s).",text:"Por favor, preencha Todos os campos"}),!1;swal.fire({icon:"info",title:"Processando requisição",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/CreatePessoas",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:{data:a},type:"POST",dataType:"json",success:function(o){o.resultado=="OK"?(swal.fire({icon:"success",title:o.title,text:o.text}),location.reload()):(swal.fire({icon:"warning",type:"error",title:o.title,text:o.text}),console.log(o.error))},error:function(o){swal.fire({icon:"warning",title:"Erro",text:"Não foi possivel realizar esta operação, tente novamente.",allowOutsideClick:!0}),console.log(o)}})}),$("#nova_pessoa_reset").click(function(n){n.preventDefault(),$(".btn_salvar").css("display",""),$(".btn_atualizar").css("display","none"),$("#rua_endereco").val(""),$("#cep").val(""),$("#bairro").val(""),$("#cidade").val(""),$("#uf").val(""),$("#nome_cadastro").val(""),$("#numero").val(""),$("#CPF").val("")}),$("#nova_conta_reset").click(function(n){n.preventDefault(),$(".select_pessoa_conta").css("display",""),$(".pessoa_conta_selecionada").css("display","none"),$("#pessoa_conta").val(""),$("#conta").val(""),$(".btn_salvar").css("display",""),$(".btn_atualizar").css("display","none")}),$("#listar_pessoas_conta").on("click",".editPerson",function(n){n.preventDefault(),$(".btn_salvar").css("display","none"),$(".btn_atualizar").css("display","");var a=$(this).closest("tr").find("td:eq(1)").text();swal.fire({icon:"info",title:"Localizando Pessoa",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/atualizaFormPerson",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},type:"POST",data:{cpf:a},dataType:"json",success:function(e){e.resultado=="OK"?(swal.fire({icon:"success",title:"Pessoa Encontrada"}),$("#rua_endereco").val(e.dados.logradouro),$("#cep").val(e.dados.cep),$("#bairro").val(e.dados.bairro),$("#cidade").val(e.dados.municipio),$("#uf").val(e.dados.estado),$("#nome_cadastro").val(e.dados.nome),$("#numero").val(e.dados.numero),$("#CPF").val(e.cpf).mask("000.000.000-00",{reverse:!0}),console.log(e.dados)):e.resultado=="ERRO"&&(swal.fire({icon:"warning",title:"ERRO NA REQUISIÇÃO!",text:e.text}),console.log(e.dados))},error:function(e){swal.fire({icon:"warning",title:"ERRO NA REQUISIÇÃO!",text:e.text}),console.log(e.dados)}})}),$("#Button_save_count").on("click",function(n){n.preventDefault();var a={},e=0;if($.each($("#form_new_count").serializeArray(),function(o,t){a[t.name]=t.value,t.value!=""&&e++}),console.log(e),e<2)return swal.fire({icon:"warning",title:"Exite Campo(s) vazio(s).",text:"Por favor, preencha Todos os campos"}),!1;console.log(a),swal.fire({icon:"info",title:"Processando requisição",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/saveCount",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:{data:a},type:"POST",dataType:"json",success:function(o){o.resultado=="OK"?(swal.fire({icon:"success",title:o.title,text:o.text}),location.reload()):(swal.fire({icon:"warning",type:"error",title:o.title,text:o.text}),console.log(o.error))},error:function(o){swal.fire({icon:"warning",title:"Erro",text:"Não foi possivel realizar esta operação, tente novamente.",allowOutsideClick:!0}),console.log(o)}})}),$("#listar_conta_table").on("click",".deleteCount",function(n){n.preventDefault();var a=$(this).closest("tr").find("td:eq(2)").text();swal.fire({icon:"warning",title:"Deseja excluir a conta bancária de nº  "+a+" do Sistema? ",allowOutsideClick:!1,showCancelButton:!0,cancelButtonText:"NÃO",cancelButtonColor:"#ed5048",confirmButtonText:"SIM",confirmButtonColor:"#33733f"}).then(e=>{e.value&&(swal.fire({icon:"info",title:"Localizando Pessoa",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/deleteCount",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},type:"POST",data:{conta:a},dataType:"json",success:function(o){o.resultado=="OK"?(swal.fire({icon:"success",title:"Conta Encontrada",text:"Conta Removida do sistema com sucesso."}),window.location.reload()):o.resultado=="ERRO"&&swal.fire({icon:"warning",title:"ERRO NA REQUISIÇÃO!",text:o.text})},error:function(o){swal.fire({icon:"warning",title:"ERRO NA REQUISIÇÃO!",text:o.text})}}))})}),$("#listar_conta_table").on("click",".editCount",function(n){n.preventDefault(),$(".btn_conta_atualizar").css("display",""),$(".btn_salvar").css("display","none"),$(".select_pessoa_conta").css("display","none"),$(".pessoa_conta_selecionada").css("display","");var a=$(this).closest("tr").find("td:eq(2)").text();swal.fire({icon:"info",title:"Localizando Pessoa",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/atualizaFormCount",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},type:"POST",data:{conta:a},dataType:"json",success:function(e){e.resultado=="OK"?(swal.fire({icon:"success",title:"Pessoa Encontrada"}),$("#pessoa_conta_select").val(e.dados.nome+" - "+e.dados.cpf),$("#conta").val(e.dados.NumeroConta),console.log(e.dados)):e.resultado=="ERRO"&&(swal.fire({icon:"warning",title:"ERRO NA REQUISIÇÃO!",text:e.text}),console.log(e.dados))},error:function(e){swal.fire({icon:"warning",title:"ERRO NA REQUISIÇÃO!",text:e.text}),console.log(e.dados)}})})});$("#nome_cadastro").keyup(function(){var n=$("#nome_cadastro").val();n=n.toLowerCase().replace(/(?:^|\s)\S/g,function(a){return a.toUpperCase()}),$("#nome_cadastro").val(n)});$("#pessoa_conta_movimento").change(function(){var n={},a=0;console.log(n),$.each($("#form_moviment").serializeArray(),function(t,s){n[s.name]=s.value,s.value!=""&&a++});var e=$("#form_moviment option:selected").attr("data-nomeCliente"),o=$("#form_moviment option:selected").attr("data-cpf");console.log(n,a,e,o),swal.fire({type:"info",title:"Processando requisição",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/listarMoviment",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:{data:n,nomeCliente:e,cpf:o},type:"POST",dataType:"json",success:function(t){t.resultado=="OK"?($("#conta_movimento").children().remove(),swal.fire({type:"success",title:t.title,text:t.text}),t.dados.forEach(function(s){$("#conta_movimento").append('<option value="">CONTA : '+s.NumeroConta+" / SALDO : "+s.saldo+"</option>"),swal.close()}),console.log(t)):(swal.fire({type:"error",title:t.title,text:t.text}),console.log(t.error))},error:function(t){swal.fire({type:"warning",title:"Erro",text:"Não foi possivel realizar esta operação, tente novamente.",allowOutsideClick:!0})}})});$("#conta_movimento").change(function(){var n=$("#conta_movimento option:selected").text(),a={};swal.fire({type:"info",title:"Processando requisição",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/extratoMoviment",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:{data:a,saldo:n},type:"POST",dataType:"json",success:function(e){e.resultado=="OK"?(e.extrato,swal.fire({type:"success",title:e.title,text:e.text}),extratoTabela.clear().draw(),e.dados.forEach(function(o){if(o.data)var t=["<i class='fas fa-check' style='color: green'></i>"];else var t=["<i class='fas fa-times-circle' style='color: red'></i>"];t.push(o.data,o.valor),extratoTabela.row.add(t).draw(),swal.close()})):(swal.fire({type:"error",title:e.title,text:e.text}),console.log(e.error))},error:function(e){swal.fire({type:"warning",title:"Erro",text:"Não foi possivel realizar esta operação, tente novamente.",allowOutsideClick:!0})}})});$("#Button_save_moviment").on("click",function(n){n.preventDefault();var a={},e=0;if($.each($("#form_moviment").serializeArray(),function(t,s){a[s.name]=s.value,s.value!=""&&e++}),console.log(e),e<3)return swal.fire({icon:"warning",title:"Exite Campo(s) vazio(s).",text:"Por favor, preencha Todos os campos"}),!1;if(console.log(a,a.conta_movimento),a.pessoa_conta_movimento=="Selecione uma pessoa"||a.conta_movimento=="Selecione uma conta")return swal.fire({icon:"warning",title:"Selecione um cliente e uma conta",text:"Por favor, Escolha um cliente e conta para fazer a movimentação"}),!1;var o=$("#conta_movimento option:selected").text();console.log(o),swal.fire({icon:"info",title:"Processando requisição",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/saveMoviment",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:{data:a,saldo:o},type:"POST",dataType:"json",success:function(t){t.resultado=="OK"?(swal.fire({icon:"success",title:t.title,text:t.text}),location.reload()):(swal.fire({icon:"warning",type:"error",title:t.title,text:t.text}),console.log(t.error))},error:function(t){swal.fire({icon:"warning",title:"Erro",text:"Não foi possivel realizar esta operação, tente novamente.",allowOutsideClick:!0}),console.log(t)}})});
