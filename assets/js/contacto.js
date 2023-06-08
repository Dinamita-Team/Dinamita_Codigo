'use strict'
const formulario = document.getElementById('contactForm');

const validarTelefono = (event) =>{
    //expresion regular para validar que tenga numeros
    const phoneRegex =  /^[0-9]+$/;
    let telefono = formulario.phone.value;
    //Si lo ingeresado no es un numero o la longitud es mayor a 10 borre el iltimo caracter
    if (!phoneRegex.test(telefono) || telefono.length > 10) {
        formulario.phone.value = telefono.substring(0, telefono.length -1);
    }
};

const validarNombre = (event) => {
     //expresion regular para validar que tenga 2 espacios seguidos
    const nameSpaceRegex = /(\s{2,})/g;
     //expresion regular para validar que tenga numeros
    const letrasRegex = /(\d+)/g;
    let nombre = formulario.name.value;
    if (nombre.trim() === "") {
        formulario.name.value = "";
    }
    if(nameSpaceRegex.test(nombre)){
        formulario.name.value = nombre.substring(0, nombre.length -1);
    }
    if (letrasRegex.test(nombre)) {
        formulario.name.value = nombre.substring(0, nombre.length -1);
    }

};

const crearBoton = () => {
    // Crear el botón
    var refreshButton = document.createElement("button");
    formulario.style.marginBottom = "1.5em";
    refreshButton.textContent = "ACEPTAR";
    refreshButton.style.backgroundColor="#b70e21";
    refreshButton.style.border="none";
    refreshButton.style.padding="1em";
    refreshButton.style.color="#ffff";
    refreshButton.style.float = "center";
    refreshButton.style.width = "100%";
    refreshButton.onmouseenter = () => {
        refreshButton.style.backgroundColor="#5f0a0a";
        refreshButton.style.color="rgb(255, 100, 100)";
        refreshButton.style.outline="0";
        refreshButton.style.transition="background-color 1s ease-out";
    }
    refreshButton.onmouseleave = () => {
        refreshButton.style.backgroundColor="#b70e21";
        refreshButton.style.border="none";
        refreshButton.style.padding="1em";
        refreshButton.style.color="#ffff";
    }

    // Agregar evento de clic al botón
    refreshButton.addEventListener("click", function() {
        // Recargar la página
        location.reload();
    });

    // Agregar el botón al contenedor
    let contenedor = document.getElementById('contact-container');
    contenedor.appendChild(refreshButton);
};

const enviarInformacion = (event) => {
    event.preventDefault();
    var status = document.getElementById("contactForm");
      var data = new FormData(event.target);
      // promesa para enviar los datos por metodo post al servicio de correo
      fetch(event.target.action, {
        method: formulario.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Gracias, pronto estaremos en contacto!";
          crearBoton();
          formulario.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
              crearBoton();
            } else {
              status.innerHTML = "Oops! Ocurrió un error enviando tus datos"
              crearBoton();
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! Ocurrió un error enviando tus datos"
        crearBoton();
    });
     
};

formulario.phone.addEventListener('keyup', validarTelefono);
formulario.name.addEventListener('keyup', validarNombre);
formulario.name.addEventListener('keydown', validarNombre);
formulario.addEventListener('submit', enviarInformacion);
