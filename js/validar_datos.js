$(document).ready(function(event){


$("#inscripcion").submit(function (event) {
    event.preventDefault();


    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var dni = document.getElementById('dni').value;
    var celular = document.getElementById('celular').value;
    var ciudad = document.getElementById('ciudad').value;
    var tipo_inscripcion = document.getElementById('tipo_inscripcion').value;
    var institucion=document.getElementById('institucion').value;

    console.log(tipo_inscripcion);


    /* validar usuario */
    if (nombre != "") {

        var caracters = nombre.length;
        var regex = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

        if (!regex.test(nombre)) {

            document.getElementById('nombre').className = "form-control form-control-danger";
            document.getElementById('alerta-nombre').style.display = "block";
            document.getElementById("alerta-nombre").innerHTML = 'Los nombres empiezan con mayúscula';

            return false;

        } else {
            document.getElementById('nombre').className = "form-control";
            document.getElementById('alerta-nombre').style.display = "none";
        }

    } else {
        document.getElementById('nombre').className = "form-control form-control-danger";
        document.getElementById('alerta-nombre').style.display = "block";
        document.getElementById("alerta-nombre").innerHTML = 'Escribe tu nombre';
        return false;
    }

    /* validar usuario */
    if (apellido != "") {

        var caracters = apellido.length;
        var regex = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

        if (!regex.test(apellido)) {

            document.getElementById('apellido').className = "form-control form-control-danger";
            document.getElementById('alerta-apellido').style.display = "block";
            document.getElementById("alerta-apellido").innerHTML =
                'Los apellidos empiezan con mayúscula';

            return false;

        } else {
            document.getElementById('apellido').className = "form-control";
            document.getElementById('alerta-apellido').style.display = "none";
        }

    } else {
        document.getElementById('apellido').className = "form-control form-control-danger";
        document.getElementById('alerta-apellido').style.display = "block";
        document.getElementById("alerta-apellido").innerHTML = 'Escribe tu apellido';
        return false;
    }

    /* validar usuario */
    if (dni != "") {

        var caracters = dni.length;
        var regex = /[0-9]{8}$/;

        if (caracters != 8) {
            document.getElementById('dni').className = "form-control form-control-danger";
            document.getElementById('alerta-dni').style.display = "block";
            document.getElementById("alerta-dni").innerHTML = 'El dni debe tener 8 digitos';
            return false;

        }


        if (!regex.test(dni)) {

            document.getElementById('dni').className = "form-control form-control-danger";
            document.getElementById('alerta-dni').style.display = "block";
            document.getElementById("alerta-dni").innerHTML = 'El dni esta conformado por numeros';
            console.log('hola');
            return false;

        } else {
            document.getElementById('dni').className = "form-control";
            document.getElementById('alerta-dni').style.display = "none";
        }

    } else {
        document.getElementById('dni').className = "form-control form-control-danger";
        document.getElementById('alerta-dni').style.display = "block";
        document.getElementById("alerta-dni").innerHTML = 'Escribe tu dni';
        return false;
    }

    /* validar ciudad */
    if (ciudad != "") {

        var regex = /^([a-zA-Zñáéíóú]+[\s]*)+$/;

        if (!regex.test(ciudad)) {

            document.getElementById('ciudad').className = "form-control form-control-danger";
            document.getElementById('alerta-ciudad').style.display = "block";
            document.getElementById('alerta-ciudad').innerHTML =
                'El formato de la ciudad es incorrecto';
            return false;
        } else {
            document.getElementById('ciudad').className = "form-control";
            document.getElementById('alerta-ciudad').style.display = "none";
        }

    } else {
        document.getElementById('ciudad').className = "form-control form-control-danger";
        document.getElementById('alerta-ciudad').style.display = "block";
        document.getElementById('alerta-ciudad').innerHTML = 'Escribe tu ciudad';
        return false;
    }


    /* validar celular */
    if (tipo_inscripcion == "defecto") {

        document.getElementById('tipo_inscripcion').className = "form-control form-control-danger";
        document.getElementById('alerta-inscripcion').style.display = "block";
        document.getElementById('alerta-inscripcion').innerHTML =
            'Elige tu forma de inscripción';
        return false;


    } else {
        document.getElementById('tipo_inscripcion').className = "form-control";
        document.getElementById('alerta-inscripcion').style.display = "none";


    }
    /* validar celular */
    if (institucion != "") {

        var regex =/^([a-zA-Zñáéíóú]+[\s]*)+$/;

        if (!regex.test(institucion)) {

            document.getElementById('institucion').className = "form-control form-control-danger";
            document.getElementById('alerta-institucion').style.display = "block";
            document.getElementById('alerta-institucion').innerHTML =
                'El formato de la institución es incorrecto';
            return false;
        } else {
            document.getElementById('institucion').className = "form-control";
            document.getElementById('alerta-institucion').style.display = "none";
        }

    } else {
        document.getElementById('institucion').className = "form-control form-control-danger";
        document.getElementById('alerta-institucion').style.display = "block";
        document.getElementById('alerta-institucion').innerHTML =
            'Escribe tu institución o universidad';
        return false;
    }


    /* validar celular */
    if (celular != "") {

        var regex = /[0-9]*$/;

        if (!regex.test(celular)) {

            document.getElementById('celular').className = "form-control form-control-danger";
            document.getElementById('alerta-celular').style.display = "block";
            document.getElementById('alerta-celular').innerHTML =
                'El formato del celular es incorrecto';
            return false;
        } else {
            document.getElementById('celular').className = "form-control";
            document.getElementById('alerta-celular').style.display = "none";
        }

    } else {
        document.getElementById('celular').className = "form-control form-control-danger";
        document.getElementById('alerta-celular').style.display = "block";
        document.getElementById('alerta-celular').innerHTML = 'Escribe tu celular';
        return false;
    }

    /* validar email */
    if (email != "") {

        var regex = /^[\w]+@{1}[\w]+\.[a-z]{2,3}$/;

        if (!regex.test(email)) {

            document.getElementById('email').className = "form-control form-control-danger";
            document.getElementById('alerta-email').style.display = "block";
            document.getElementById('alerta-email').innerHTML = 'El formato del correo es incorrecto';
            return false;
        } else {
            document.getElementById('email').className = "form-control";
            document.getElementById('alerta-email').style.display = "none";
        }

    } else {
        document.getElementById('email').className = "form-control form-control-danger";
        document.getElementById('alerta-email').style.display = "block";
        document.getElementById('alerta-email').innerHTML = 'Escribe tu email';
        return false;
    }

    var archivo=$("#fotovoucher").val();
    if(archivo===''){
        document.getElementById('fotovoucher').className = "form-control form-control-danger";
        document.getElementById('alerta-imagen').style.display = "block";
        document.getElementById('alerta-imagen').innerHTML = 'No subiste una imagen';
        return false;
    }
    else{
        document.getElementById('fotovoucher').className = "form-control";
            document.getElementById('alerta-imagen').style.display = "none"; 
    }
    

//             var formData = new FormData($("#inscripcion")[0]);
// console.log(formData);

$.ajax({
    type: 'post',
    url: 'hola.php',
    data: new FormData(this),
    contentType: false,
    cache: false,
    processData:false,
    success: function(msg){
        $('.statusMsg').html('');
        console.log(msg);
        if(msg === 'ok'){
            // $('#inscripcion')[0].reset();
        $('.statusMsg').html('<span style="font-size:18px;color:#34A853">La información ha sdio enviada correctamente.Pronto te llegar el correo de confirmación</span>');
        }else{
            $('.statusMsg').html('<span style="font-size:18px;color:#EA4335">Algun error ha ocurrido, porfavor llena de nuevo los datos</span>');
        }
        // $('#fupForm').css("opacity","");
        // $(".submitBtn").removeAttr("disabled");
    }
});



})

$("#fotovoucher").change(function() {
var file = this.files[0];
var imagefile = file.type;
var match= ["image/jpeg","image/png","image/jpg"];

if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2]))){
    document.getElementById('fotovoucher').className = "form-control form-control-danger";
        document.getElementById('alerta-imagen').style.display = "block";
        document.getElementById('alerta-imagen').innerHTML = 'Selecciona un formato de imagen valido (JPEG/JPG/PNG).';
    $("#foto_voucher").val('');
    return false;
}
});

})