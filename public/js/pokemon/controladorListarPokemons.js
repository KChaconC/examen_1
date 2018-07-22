'use strict';

listarPokemons();

function listarPokemons(){
    let pokemons = listaPokemons();
    let tbody = document.querySelector('#tblPokemon tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < pokemons.length; i++){
        let fila = tbody.insertRow();

        let foto = fila.insertCell();
        let noPokedex = fila.insertCell();
        let pokemon = fila.insertCell();
        let tipos = fila.insertCell();
    
            foto.innerHTML = pokemons[i]['foto'];
            noPokedex.innerHTML = pokemons[i]['numero_pokedex'];
            pokemon.innerHTML = pokemons[i]['nombre_pokemon'];
            tipos.innerHTML = pokemons[i]['tipo_1' && 'tipo_2'];
    }

}

