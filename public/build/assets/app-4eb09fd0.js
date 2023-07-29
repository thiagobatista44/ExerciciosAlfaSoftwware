$(document).ready(function(){$("#CPF").mask("000.000.000-00",{reverse:!0}),$(".validador_cpf").mask("000.000.000-00",{reverse:!0}),$(".money").mask("#.##0,00",{reverse:!0});function s(){$("#rua").val(""),$("#bairro").val(""),$("#cidade").val(""),$("#uf").val(""),$("#ibge").val("")}$("#cep").blur(function(){var a=$(this).val().replace(/\D/g,"");if(a!=""){var t=/^[0-9]{8}$/;t.test(a)?($("#rua_endereco").val("..."),$("#bairro").val("..."),$("#cidade").val("..."),$("#uf").val("..."),$.getJSON("https://viacep.com.br/ws/"+a+"/json/?callback=?",function(e){"erro"in e?(s(),alert("CEP não encontrado.")):($("#rua_endereco").val(e.logradouro),$("#bairro").val(e.bairro),$("#cidade").val(e.localidade),$("#uf").val(e.uf))})):(s(),alert("Formato de CEP inválido."))}else s()}),$("#listar_pessoas_conta").on("click",".deletePerson",function(a){a.preventDefault();var t=$(this).closest("tr").find("td:eq(1)").text();swal.fire({icon:"warning",title:"Deseja excluir os dados da pessoa do CPF "+t+" do Sistema? ",allowOutsideClick:!1,showCancelButton:!0,cancelButtonText:"NÃO",cancelButtonColor:"#ed5048",confirmButtonText:"SIM",confirmButtonColor:"#33733f"}).then(e=>{e.value&&(swal.fire({icon:"info",title:"Localizando Pessoa",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/deletePerson",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},type:"POST",data:{cpf:t},dataType:"json",success:function(o){o.resultado=="OK"?(swal.fire({icon:"success",title:"Pessoa Encontrada",text:"Pessoa Removida do sistema com sucesso."}),window.location.reload()):o.resultado=="ERRO"&&swal.fire({icon:"warning",title:"ERRO NA REQUISIÇÃO!",text:o.text})},error:function(o){swal.fire({icon:"warning",title:"ERRO NA REQUISIÇÃO!",text:o.text})}}))})}),$("#Button_new_person").on("click",function(a){a.preventDefault();var t={},e=0;if($.each($("#form_new_person").serializeArray(),function(o,n){t[n.name]=n.value,n.value!=""&&e++}),console.log(e),e<8)return swal.fire({icon:"warning",title:"Exite Campo(s) vazio(s).",text:"Por favor, preencha Todos os campos"}),!1;swal.fire({icon:"info",title:"Processando requisição",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/createPerson",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:{data:t},type:"POST",dataType:"json",success:function(o){o.resultado=="OK"?(swal.fire({icon:"success",title:o.title,text:o.text}),location.reload()):(swal.fire({icon:"warning",type:"error",title:o.title,text:o.text}),console.log(o.error))},error:function(o){swal.fire({icon:"warning",title:"Erro",text:"Não foi possivel realizar esta operação, tente novamente.",allowOutsideClick:!0}),console.log(o)}})}),$("#nova_pessoa_reset").click(function(a){a.preventDefault(),$(".btn_salvar").css("display",""),$(".btn_atualizar").css("display","none"),$("#rua_endereco").val(""),$("#cep").val(""),$("#bairro").val(""),$("#cidade").val(""),$("#uf").val(""),$("#nome_cadastro").val(""),$("#numero").val(""),$("#CPF").val("")}),$("#nova_conta_reset").click(function(a){a.preventDefault(),$(".select_pessoa_conta").css("display",""),$(".pessoa_conta_selecionada").css("display","none"),$("#pessoa_conta").val(""),$("#conta").val(""),$(".btn_salvar").css("display",""),$(".btn_atualizar").css("display","none")}),$("#listar_pessoas_conta").on("click",".editPerson",function(a){a.preventDefault(),$(".btn_salvar").css("display","none"),$(".btn_atualizar").css("display","");var t=$(this).closest("tr").find("td:eq(1)").text();swal.fire({icon:"info",title:"Localizando Pessoa",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/atualizaFormPerson",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},type:"POST",data:{cpf:t},dataType:"json",success:function(e){e.resultado=="OK"?(swal.fire({icon:"success",title:"Pessoa Encontrada"}),$("#rua_endereco").val(e.dados.logradouro),$("#cep").val(e.dados.cep),$("#bairro").val(e.dados.bairro),$("#cidade").val(e.dados.municipio),$("#uf").val(e.dados.estado),$("#nome_cadastro").val(e.dados.nome),$("#numero").val(e.dados.numero),$("#CPF").val(e.cpf).mask("000.000.000-00",{reverse:!0}),console.log(e.dados)):e.resultado=="ERRO"&&(swal.fire({icon:"warning",title:"ERRO NA REQUISIÇÃO!",text:e.text}),console.log(e.dados))},error:function(e){swal.fire({icon:"warning",title:"ERRO NA REQUISIÇÃO!",text:e.text}),console.log(e.dados)}})}),$("#Button_save_count").on("click",function(a){a.preventDefault();var t={},e=0;if($.each($("#form_new_count").serializeArray(),function(o,n){t[n.name]=n.value,n.value!=""&&e++}),console.log(e),e<2)return swal.fire({icon:"warning",title:"Exite Campo(s) vazio(s).",text:"Por favor, preencha Todos os campos"}),!1;console.log(t),swal.fire({icon:"info",title:"Processando requisição",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/saveCount",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:{data:t},type:"POST",dataType:"json",success:function(o){o.resultado=="OK"?(swal.fire({icon:"success",title:o.title,text:o.text}),location.reload()):(swal.fire({icon:"warning",type:"error",title:o.title,text:o.text}),console.log(o.error))},error:function(o){swal.fire({icon:"warning",title:"Erro",text:"Não foi possivel realizar esta operação, tente novamente.",allowOutsideClick:!0}),console.log(o)}})}),$("#listar_conta_table").on("click",".deleteCount",function(a){a.preventDefault();var t=$(this).closest("tr").find("td:eq(2)").text();swal.fire({icon:"warning",title:"Deseja excluir a conta bancária de nº  "+t+" do Sistema? ",allowOutsideClick:!1,showCancelButton:!0,cancelButtonText:"NÃO",cancelButtonColor:"#ed5048",confirmButtonText:"SIM",confirmButtonColor:"#33733f"}).then(e=>{e.value&&(swal.fire({icon:"info",title:"Localizando Pessoa",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/deleteCount",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},type:"POST",data:{conta:t},dataType:"json",success:function(o){o.resultado=="OK"?(swal.fire({icon:"success",title:"Conta Encontrada",text:"Conta Removida do sistema com sucesso."}),window.location.reload()):o.resultado=="ERRO"&&swal.fire({icon:"warning",title:"ERRO NA REQUISIÇÃO!",text:o.text})},error:function(o){swal.fire({icon:"warning",title:"ERRO NA REQUISIÇÃO!",text:o.text})}}))})}),$("#listar_conta_table").on("click",".editCount",function(a){a.preventDefault(),$(".btn_conta_atualizar").css("display",""),$(".btn_salvar").css("display","none"),$(".select_pessoa_conta").css("display","none"),$(".pessoa_conta_selecionada").css("display","");var t=$(this).closest("tr").find("td:eq(2)").text();swal.fire({icon:"info",title:"Localizando Pessoa",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/atualizaFormCount",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},type:"POST",data:{conta:t},dataType:"json",success:function(e){e.resultado=="OK"?(swal.fire({icon:"success",title:"Pessoa Encontrada"}),$("#pessoa_conta_select").val(e.dados.nome+" - "+e.dados.cpf),$("#conta").val(e.dados.NumeroConta),console.log(e.dados)):e.resultado=="ERRO"&&(swal.fire({icon:"warning",title:"ERRO NA REQUISIÇÃO!",text:e.text}),console.log(e.dados))},error:function(e){swal.fire({icon:"warning",title:"ERRO NA REQUISIÇÃO!",text:e.text}),console.log(e.dados)}})})});$("#nome_cadastro").keyup(function(){var s=$("#nome_cadastro").val();s=s.toLowerCase().replace(/(?:^|\s)\S/g,function(a){return a.toUpperCase()}),$("#nome_cadastro").val(s)});$("#pessoa_conta_movimento").change(function(){var s={},a=0;console.log(s),$.each($("#form_moviment").serializeArray(),function(o,n){s[n.name]=n.value,n.value!=""&&a++});var t=$("#form_moviment option:selected").attr("data-nomeCliente"),e=$("#form_moviment option:selected").attr("data-cpf");console.log(s,a,t,e),swal.fire({type:"info",title:"Processando requisição",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/listarMoviment",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:{data:s,nomeCliente:t,cpf:e},type:"POST",dataType:"json",success:function(o){o.resultado=="OK"?($("#conta_movimento").children().remove(),swal.fire({type:"success",title:o.title,text:o.text}),o.dados.forEach(function(n){$("#conta_movimento").append('<option value="">CONTA : '+n.NumeroConta+" / SALDO : "+n.saldo+"</option>"),swal.close()}),console.log(o)):(swal.fire({type:"error",title:o.title,text:o.text}),console.log(o.error))},error:function(o){swal.fire({type:"warning",title:"Erro",text:"Não foi possivel realizar esta operação, tente novamente.",allowOutsideClick:!0})}})});$("#conta_movimento").change(function(){var s=$("#conta_movimento option:selected").text(),a={};swal.fire({type:"info",title:"Processando requisição",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/extratoMoviment",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:{data:a,saldo:s},type:"POST",dataType:"json",success:function(t){t.resultado=="OK"?(t.extrato,swal.fire({type:"success",title:t.title,text:t.text}),extratoTabela.clear().draw(),t.dados.forEach(function(e){if(e.data)var o=["<i class='fas fa-check' style='color: green'></i>"];else var o=["<i class='fas fa-times-circle' style='color: red'></i>"];o.push(e.data,e.valor),extratoTabela.row.add(o).draw(),swal.close()})):(swal.fire({type:"error",title:t.title,text:t.text}),console.log(t.error))},error:function(t){swal.fire({type:"warning",title:"Erro",text:"Não foi possivel realizar esta operação, tente novamente.",allowOutsideClick:!0})}})});$("#Button_save_moviment").on("click",function(s){s.preventDefault();var a={},t=0;if($.each($("#form_moviment").serializeArray(),function(o,n){a[n.name]=n.value,n.value!=""&&t++}),console.log(t),t<3)return swal.fire({icon:"warning",title:"Exite Campo(s) vazio(s).",text:"Por favor, preencha Todos os campos"}),!1;if(console.log(a,a.conta_movimento),a.pessoa_conta_movimento=="Selecione uma pessoa"||a.conta_movimento=="Selecione uma conta")return swal.fire({icon:"warning",title:"Selecione um cliente e uma conta",text:"Por favor, Escolha um cliente e conta para fazer a movimentação"}),!1;var e=$("#conta_movimento option:selected").text();console.log(e),swal.fire({icon:"info",title:"Processando requisição",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/saveMoviment",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:{data:a,saldo:e},type:"POST",dataType:"json",success:function(o){o.resultado=="OK"?(swal.fire({icon:"success",title:o.title,text:o.text}),location.reload()):(swal.fire({icon:"warning",type:"error",title:o.title,text:o.text}),console.log(o.error))},error:function(o){swal.fire({icon:"warning",title:"Erro",text:"Não foi possivel realizar esta operação, tente novamente.",allowOutsideClick:!0}),console.log(o)}})});
