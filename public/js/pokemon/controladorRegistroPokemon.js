'use strict';


let btnRegistrarPokemon = document.querySelector('#btnRegistrar');
btnRegistrarPokemon.addEventListener('click', obtenerPokeDatos);

let iptnumPokedex = document.querySelector('#numPoke');
console.log(iptnumPokedex);
let iptnombrePokemon = document.querySelector('#nomPokemon');
let ipttipo1 = document.querySelector('#tipo1');
let ipttipo2 = document.querySelector('#tipo2');
let foto = document.querySelector('#file-upload');
llenarSelect();


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

    if(error) {
        swal({
            title: "Registro fallido",
            text: "El pokémon no se pudo registrar",
            icon: "error",
            button: "Ok",
        });
    } else {
        registrarPokemon(pokemon);
        swal({
            title: "Registro exitoso",
            text: "El pokémon se ha registrado correctamente",
            icon: "success",
            button: "Ok",
        });
        window.location('./listaPokemons.html');
        limpiarForm();
    }
    
};

function validarCamposrequeridos(){
    let error = true;

     let regExNumber = /[0-9]+/;
     let patron = /[A-Za-z0-9]+/;

    if(iptnumPokedex.value == '' || !regExNumber.test(iptnumPokedex.value)) {
        iptnumPokedex.classList.add('error');
    }else {
        iptnumPokedex.classList.remove('error');
        error = false;
    }

    if(iptnombrePokemon.value == '' || !patron.test(iptnombrePokemon.value)){
        iptnombrePokemon.classList.add('error');
    }else{
        iptnombrePokemon.classList.remove('error');
        error = false;
    }

    if(ipttipo1.value == ''){
       ipttipo1.classList.add('error');
    }else{
        ipttipo1.classList.remove('error');
        error = false;
    }

    if(ipttipo2.value == ipttipo1.value){
        console.log("el tipo no puede ser igual al tipo 1, favor elegir otro");
        ipttipo2.classList.add('error');
    }
    else{
        ipttipo2.classList.remove('error');
        error = false;
    }
    return error;
}



function limpiarForm() {
    iptnumPokedex.value = '';
    iptnombrePokemon.value = '';
    ipttipo1.value = '';
    ipttipo2.value = '';
    foto.value = '';
}

function llenarSelect(){
    let tipos = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water'];
   
    let slttipo = document.querySelector('#tipo1');
    let sltTipo2 = document.querySelector('#tipo2');   

    for(let i = 0; i < tipos.length; i++){
        slttipo.options[i+1] = new Option (tipos[i]);
        sltTipo2.options[i+1] = new Option (tipos[i]);
    }    
}

function validarNumPokedex(){
    let pokemons = listarPokemon();

    for(let i = 0; i< pokemons.length; i++){
        if(pokemons[i].numPokedex == iptnumPokedex.value){
            iptnumPokedex.classList.add('span');
        }else{
            iptnumPokedex.classList.remove('span');
        }
    }
}
