$(document).ready(function(){$("#telefone").mask("(99) 9999-99999"),$("#listar_pessoas_conta").on("click",".deletePerson",function(t){t.preventDefault();var a=$(this).closest("tr").find("td:eq(0)").text(),s=$(this).closest("tr").find("td:eq(1)").text();swal.fire({icon:"warning",title:"Deseja excluir os dados da pessoa "+s+" do Sistema? ",allowOutsideClick:!1,showCancelButton:!0,cancelButtonText:"NÃO",cancelButtonColor:"#ed5048",confirmButtonText:"SIM",confirmButtonColor:"#33733f"}).then(e=>{e.value&&(swal.fire({icon:"info",title:"Localizando Pessoa",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/deletePerson",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},type:"POST",data:{id:a},dataType:"json",success:function(o){o.resultado=="OK"?(swal.fire({icon:"success",title:"Pessoa Removida",text:"Pessoa Removida do sistema com sucesso."}),window.location.reload()):o.resultado=="ERRO"&&swal.fire({icon:"warning",title:"ERRO NA REQUISIÇÃO!",text:o.text})},error:function(o){swal.fire({icon:"warning",title:"ERRO NA REQUISIÇÃO!",text:o.text})}}))})}),$("#Button_new_person").on("click",function(t){t.preventDefault();var a={},s=0;if($.each($("#form_new_person").serializeArray(),function(e,o){a[o.name]=o.value,o.value!=""&&s++}),console.log(s),s<3)return swal.fire({icon:"warning",title:"Exite Campo(s) vazio(s).",text:"Por favor, preencha Todos os campos"}),!1;swal.fire({icon:"info",title:"Processando requisição",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/CreatePessoas",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:{data:a},type:"POST",dataType:"json",success:function(e){e.resultado=="OK"?(swal.fire({icon:"success",title:e.title,text:e.text}),location.reload()):(swal.fire({icon:"warning",type:"error",title:e.title,text:e.text}),console.log(e.error))},error:function(e){swal.fire({icon:"warning",title:"Erro",text:"Não foi possivel realizar esta operação, tente novamente.",allowOutsideClick:!0}),console.log(e)}})}),$("#btn_atualizar").on("click",function(t){t.preventDefault();var a={},s=0;if($.each($("#form_new_person_atualizar").serializeArray(),function(e,o){a[o.name]=o.value,o.value!=""&&s++}),console.log(s),s<3)return swal.fire({icon:"warning",title:"Exite Campo(s) vazio(s).",text:"Por favor, preencha Todos os campos"}),!1;swal.fire({icon:"info",title:"Processando requisição",text:"Aguarde o final da operação, isto pode demorar um pouco!",allowOutsideClick:!1}),swal.showLoading(),$.ajax({url:"/UpdatePessoas",headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},data:{data:a},type:"POST",dataType:"json",success:function(e){e.resultado=="OK"?(swal.fire({icon:"success",title:e.title,text:e.text}),window.location.href="/listarPessoasDetalhada"):(swal.fire({icon:"warning",type:"error",title:e.title,text:e.text}),console.log(e.error))},error:function(e){swal.fire({icon:"warning",title:"Erro",text:"Não foi possivel realizar esta operação, tente novamente.",allowOutsideClick:!0}),console.log(e)}})})});$("#nome_cadastro").keyup(function(){var t=$("#nome_cadastro").val();t=t.toLowerCase().replace(/(?:^|\s)\S/g,function(a){return a.toUpperCase()}),$("#nome_cadastro").val(t)});
