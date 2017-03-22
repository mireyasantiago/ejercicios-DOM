function translate(){
    var title = document.getElementById("form-signin-heading");
    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");
    var remember = document.getElementsByTagName("span")[0];
    var button = document.getElementsByClassName("btn")[0];

    title.innerHTML = "por favor inicia sesion";
    email.placeholder = "correo Electronico";
    password.placeholder = "contraseña";
    remember.innerHTML = "recordar datos";
    button.innerHTML = "Iniciar Sesion";

}
translate();

/*esta funcion se llamara al dar click , setoma los id de los valores ingresados
 para poder enlasar con las variables creadas en la funcion */
function mostrar(){
    var emailM = document.getElementById("inputEmail").value;
    var passwordM = document.getElementById("inputPassword").value;

    document.getElementById("mostrarE").innerHTML=emailM;
    document.getElementById("mostrarP").innerHTML=passwordM;
}
