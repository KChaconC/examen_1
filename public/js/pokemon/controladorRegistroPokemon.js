
'use strict';
validarCamposrequeridos();

let btnRegistrarPokemon = document.querySelector('#btnRegistrar');
btnRegistrarPokemon.addEventListener('click', obtenerPokeDatos);

let iptnumPokedex = document.querySelector('#numPoke');
let iptnombrePokemon = document.querySelector('#nomPokemon');
let ipttipo1 = document.querySelector('#tipo1');
let ipttipo2 = document.querySelector('#tipo2');
let foto = document.querySelector('#file-upload');


function obtenerPokeDatos(){
    let pokemon = [];
    let error = false;
    error = validarCamposrequeridos();

    let numPokedex = iptnumPokedex.value;
    let nomPokemon = iptnombrePokemon.value;
    let tipo_1 = ipttipo1.value;
    let tipo_2 = ipttipo2.value;
    let foto = imagenUrl;


    pokemon.push(numPokedex, nomPokemon, tipo_1, tipo_2, foto);

    if(error == true) {
        swal({
            title: "Registro fallido",
            text: "El pokémon no se pudo registrar",
            icon: "error",
            button: "Ok",
        });
    } else {
        btnRegistrarPokemon(numPokedex, nomPokemon, tipo_1, tipo_2, foto);
        swal({
            title: "Registro exitoso",
            text: "El pokémon se ha registrado correctamente",
            icon: "success",
            button: "Ok",
        });
        window.location(href = './listarPokemons.html');
        limpiarForm();
    }
    
};

function validarCamposrequeridos(){
    let error = false;

     let regExNumber = /[0-9]+/;
     let patron = /[A-Za-z0-9]+/;

     let requeridos = document.querySelectorAll('[required]');
     let vacio = false;
     for(let i = 0; i<requeridos.length; i++){
         if(requeridos[i].value == ''){
            requeridos[i].classList.add('error');
            vacio = true;
         }else{
             requeridos[i].classList.remove('error');
         }
     }
     return vacio;
}

if(validarCamposrequeridos()){
    swal({
        title: "Advertencia",
        text: "Por favor llene los campos vacíos.",
        icon: "warning",
        button: "Ok",
    });
} else {
    if(regExNumber.test(numPokedex)) {
        document.querySelector('#numPoke').classList.add('error');
    }else {
        document.querySelector('#numPoke').classList.remove('error');
    }

    if(patron.test(nomPokemon)){
        document.querySelector('#nomPokemon').classList.add('error');
    }else{
        document.querySelector('#nomPokemon').classList.remove('error');
    }
}

function limpiarForm() {
    iptnumPokedex.value = '';
    iptnombrePokemon.value = '';
    ipttipo1.value = '';
    ipttipo2.value = '';
    foto.value = '';
}