 let nome = window.document.getElementById("nome")
 let email = document.querySelector("input#email")
 let numero = document.querySelector("#numeroContato")
 let assunto = document.querySelector("#assunto")
 let mapa = document.querySelector("#maps")
 let nomeOk = false
 let emailOk = false
 let numeroOk = false
 let assuntoOk = false

 nome.style.width = "100%"
 email.style.width = "100%" 

 function validaNome(){
     let txtName = document.querySelector("#txtNome")

     if (nome.value.length<3){
        txtName.innerHTML = "Nome Inválido"
        txtName.style.color = "red"
    } else{
         txtName.innerHTML = "Nome Válido"
         txtName.style.color = "green"
         nomeOk = true
     }
 }
 
 function validaEmail(){
     let txtEmail = document.querySelector("#txtEmail")

     if (email.value.indexOf("@")==-1){
         txtEmail.innerHTML = "E-mail Inválido"
         txtEmail.style.color = "red"
     } else{
         txtEmail.innerHTML="E-mail Válido"
         txtEmail.style.color = "green"
         emailOk = true
     }
 }

 function validaNumero(){
     let txtNumero = document.querySelector("#txtNumber")

     if (numero.value.length>=14){
         txtNumero.innerHTML = "Número Inválido"
         txtNumero.style.color = "red"
     } else{
         txtNumero.innerHTML = "Número Válido"
         txtNumero.style.color = "green"
         numeroOk = true
     }
 }

 function validaAssunto(){
     let txtAssunto = document.querySelector("#txtAssunto")

     if (assunto.value.length > 100){
         txtAssunto.innerHTML = "Limite de 100 caracteres ultrapassado!"
         txtAssunto.style.color = "red"
         txtAssunto.style.display = "block"
     } else{
         txtAssunto.style.display = "none"
         assuntoOk = true
     }
 }

 function enviar(){
     if(nomeOk == true && emailOk == true && numeroOk == true && assuntoOk == true){
         alert("Formulário enviado com sucesso!!!")
     } else{
         alert("Preencha o formulário corretamente...")
     }
 }

 function mapaZoom(){
     mapa.style.width = "800px"
     mapa.style.height = "600px"
 }

 function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "300px"
 }