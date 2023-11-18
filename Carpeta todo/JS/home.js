document.getElementById("btn_inicar-seccion").addEventListener ("click", iniciarSeccion);
document.getElementById("btn_registranse").addEventListener ("click", registr);
window.addEventListener("resize",anchopagina);
document.getElementById("btn_rgstro").addEventListener("click",rgstro)

//Declaracion de variables

var contenedor_login_registro = document.querySelector(".cont_login-registro");
var formulario_login = document.querySelector(".formulario_inicio");   //Le estamos diciendo que la variable equivale al formulario
var formulario_registro = document.querySelector(".formulario_registro");
var cajatrasera_registro = document.querySelector(".cajatrasera_registro");
var cajatrasera_login = document.querySelector(".cajatrasera_login");

function anchopagina(){
    if (window.innerWidth>850){
        cajatrasera_login.style.display = "block";  //con esto le idicamos que se muestre
        cajatrasera_registro.style.display = "block";
    }else{
        cajatrasera_login.style.display = "block";  //con esto le idicamos que se muestre
        cajatrasera_registro.style.display = "none";
        cajatrasera_registro.style.opacity = "1";
        formulario_login.style.display = "block";
        formulario_registro.style.display = "none";
        contenedor_login_registro.style.left = "0px";
    }
}

function iniciarSeccion(){

    if(window.innerWidth>850){
        formulario_registro.style.display = "none";
        contenedor_login_registro.style.left = "10px";
        contenedor_login_registro.style.top = "-400px";
        formulario_login.style.display = "block";
        cajatrasera_registro.style.opacity = "1";
        cajatrasera_login.style.opacity = "0";
        
    }else{
        formulario_registro.style.display = "none";
        contenedor_login_registro.style.left = "0px";
        formulario_login.style.display = "block";
        cajatrasera_registro.style.display = "block";
        cajatrasera_login.style.display = "none"; 

    }
    
}

function registr(){
    if(window.innerWidth>850){
    formulario_registro.style.display = "block";
    contenedor_login_registro.style.left = "410px";
    contenedor_login_registro.style.top = "-500px";
    formulario_login.style.display = "none";
    cajatrasera_registro.style.opacity = "0";
    cajatrasera_login.style.opacity = "1";
    contenedor_login_registro.style.height = "20px";
    }else{
        formulario_registro.style.display = "block";
        contenedor_login_registro.style.left = "0px";
        formulario_login.style.display = "none";
        cajatrasera_registro.style.display = "none";
        cajatrasera_login.style.display = "block"; 
        cajatrasera_login.style.opacity = "1";
    }
}

function rgstro() {
    
}
