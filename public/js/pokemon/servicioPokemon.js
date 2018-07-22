'use strict';


function registrarPokemon(pokemon){
    console.log(pokemon);
    let respuesta = '' ;
    let peticion = $.ajax({
        url: 'http://localhost:4000/api/registrar_pokemon',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            numero_pokedex : pokemon[0],
            nombre_pokemon : pokemon[1],
            tipo_1 : pokemon[2],
            tipo_2: pokemon[3],
            foto : pokemon[4],
        }
    });
    peticion.done(function(response){
        respuesta = response;
       
       });
     
       peticion.fail(function(response){
           
        
       });
 
       return respuesta;
}

function listaPokemons(){
    let pokemons = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listar_pokemons',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{

        }
    });

    peticion.done(function(response){
        respuesta = response;
       });
     
       peticion.fail(function(response){
        
       });
 
       return respuesta;
     //    listaTickets
     console.log(response);
     console.log(pokemons);
    return pokemons;
}
