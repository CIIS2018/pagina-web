/*===============================================
            Validar Nuevo Registro
===============================================*/
function validarRegistro(event) {
    event.preventDefault();
    console.log('hola mundo');
    // var nombre = document.querySelector("#nombreregister").value;
    // var apellido = document.querySelector("#apellidoregister").value;
    // var email = document.querySelector("#emailregister").value;
    // var terms = document.querySelector("#termsregister").checked;

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var dni = document.getElementById('dni').value;
    var ciudad = document.getElementById('ciudad').value;
    
    /* validar usuario */
    if(nombre != "") {

        var caracters = nombre.length;
        var regex = /^[a-zA-Z0-9]+$/;

        if (caracters > 5) {

            document.getElementById('nombre').className = "form-control form-control-danger";
            document.getElementById('alerta-nombre').style.display="block";

            return false;

        }

        if(!regex.test(nombre)) {

            alert("No use caracteres especiales en el nombre.");

            return false;

        }

    }

    /* validar usuario */
    if(apellido != "") {

        var caracters = apellido.length;
        var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (caracters < 6) {

            alert("La contraseña tiene que tener mas de seis caracteres.");

            return false;

        }

        if(!regex.test(apellido)) {

            alert("Usa al menos una mayuscula, una minuscula y numeros.");
        
            return false;

        }

    }

    /* validar usuario */
    if(email != "") {

        var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if(!regex.test(email)) {

            alert("Usa en el dato del correo electronico la arroba.");

            return false;

        }

    }

    /* Validar terminos */
    if(!terms) {

        alert("No has aceptado las condiciones del registro.");

        document.querySelector("#nombreregister").value = nombre;
        document.querySelector("#apellidoregister").value = apellido;
        document.querySelector("#emailregister").value = email;

        return false;

    }

    return true;
    
}