'use strict';


let tipos = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water'];

let slttipos = document.querySelector('#tipo');
for (let i = 0; i < tipos.length; i++) {
    slttipos.options[i+1] = new Option(tipos[i]);
}

let btnFiltro = document.querySelector("#bntFiltro");
let inpFiltro = document.querySelector('#buscarPokemon');
listarPokemons(inpFiltro.value, slttipos.innerText);

btnFiltro.addEventListener('click', function () {
    listarPokemons(inpFiltro.value, slttipos.innerHTML);
});

console.log(slttipos);
function listarPokemons(inpFiltro, slttipos) {
   
    let pokemons = listaPokemons();

    let tbody = document.querySelector('#tblPokemon tbody');
    tbody.innerHTML = '';


    
    for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i]['nombre_pokemon'].toLowerCase().includes(inpFiltro)) {
                if ( pokemons[i]['tipo_1'].toLowerCase().includes(slttipos)){    
            

            let fila = tbody.insertRow();

            let foto = fila.insertCell();
            let noPokedex = fila.insertCell();
            let pokemon = fila.insertCell();
            let tipos = fila.insertCell();

            let img = document.createElement('img');
            img.src = pokemons[i]['foto'];
            img.classList.add('image');

            foto.appendChild(img);

            noPokedex.innerHTML = pokemons[i]['numero_pokedex'];
            pokemon.innerHTML = pokemons[i]['nombre_pokemon'];

            tipos.innerHTML = pokemons[i]['tipo_1'] + ' ' + pokemons[i]['tipo_2'];
        }
        }
    }
}


