'use strict';

let botonRegistro = document.querySelector('#btnRegistro');
botonRegistro.addEventListener('click', registrarEntrenador);

let inptNumEntrenador = document.querySelector('#numero');
let inptNombre = document.querySelector('#nombre');
let inptEdad = document.querySelector('#edad');
let sltSexo = document.querySelector('#sltSexo');
let inptfoto = document.querySelector('#file-upload');


function registrarEntrenador(){
    let entrenadores = [];

    let error = false;
    error = validar();

    let numEntrenador = inptNumEntrenador.value;
    let nombre = inptNombre.value;
    let edad = inptEdad.value;
    let sexo = sltSexo.value;
    let foto = imagenUrl;

    entrenadores.push(numEntrenador, nombre, edad, sexo, foto);

    console.log(sexo);
    if (error == true) {
        console.log('aquí va un sweet alert xD ');
        swal({
            title: "Registro fallido",
            text: "El entrenador no se pudo registrar",
            icon: "error",
            button: "Ok",
        });
    } else {
        registroEntrenador(entrenadores);
        limpiarForm();
        swal({
            title: "Registro exitoso",
            text: "El entrenador se ha registrado correctamente",
            icon: "success",
            button: "Ok",
        });
        
    }
}

function validar(){
    let regExNumber = /[0-9]+/;
    let patron = /[A-Za-z0-9]+/;
    let regEsLetras = /[A-Za-záéíóúñÑÁÉÍÓÚ+-]+/;
    let error = false;

    if(inptNumEntrenador.value == '' || regExNumber.test(inptNumEntrenador.value) == false){
    inptNumEntrenador.classList.add('error');
    error = true;
}else{ 
    inptNumEntrenador.classList.remove('error');
   
}

    if(inptNombre.value == '' || regEsLetras.test(inptNombre.value) == false ){
        inptNombre.classList.add('error');
       error = true;
    }else{
        inptNombre.classList.remove('error');
       
    }

    if(inptEdad.value == '' ){
        inptEdad.classList.add('error');
        error = true;
    }else{
        inptEdad.classList.remove('error');
        
    }

    if(sltSexo.value == '' ){
        sltSexo.classList.add('error');
        error = true;
        
    }else{
        sltSexo.classList.remove('error');
    }
    return error;
}
    


function limpiarForm(){
inptNumEntrenador.value = '';
inptNombre.value = '';
inptEdad.value = '';
sltSexo.value = '';
inptfoto.value = '';
}