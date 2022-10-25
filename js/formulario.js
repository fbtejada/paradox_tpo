

const formulario=document.getElementById("formulario");
const inputs= document.querySelectorAll("#formulario input");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mensaje: /^[a-zA-ZÀ-ÿ\s]{2,100}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

var nombre = document.getElementById("fname");
var apellido = document.getElementById("lname");
var email = document.getElementById("email");
var mensaje = document.getElementById("message");
var error = document.getElementById("error");
var checkbox = document.getElementById("checkbox");
// error.style.color = "black";


function validarFormulario(){
	clickAudio.play();
	// console.log("Enviando formulario...");
	// console.log("Fuimos1");
	var mensajesError = [];
	var flag = 0;

	if(nombre.value.search(expresiones.nombre) === -1){
		mensajesError.push("Nombre inválido");
		flag+=1;
	}

	if(apellido.value.search(expresiones.nombre) === -1){
		mensajesError.push("Apellido inválido");
		flag+=2;
	}

	if(email.value.search(expresiones.correo) === -1){
		mensajesError.push("email inválido");
		flag+=4;
	}

	if(mensaje.value.search(expresiones.mensaje) === -1){
		mensajesError.push("Mensaje inválido (mínimo 2 caracteres)");
		flag+=8;
	}
	
	error.innerHTML = mensajesError.join(" - ");
	if(flag === 0){
		alert("Muchas gracias por contactarse con Paradox")
        formulario.submit();
	}
	if(checkbox.checked){enviarCopia(formulario , email.value)};
	return flag;
}
function enviarCopia(formulario , mail){
	// Esta funcion deberia enviar el formulario al mail indicado
	// Funcion no implementada
}