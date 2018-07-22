
'use strict';

listarEntrenadores();


function listarEntrenadores() {
   
    let entrenadores = obtenerListaEntrenadores();

    let tbody = document.querySelector('#tblEntrenadores tbody');
    tbody.innerHTML = '';


    
    for (let i = 0; i < entrenadores.length; i++) {

            let fila = tbody.insertRow();

            let foto = fila.insertCell();
            let numEntrenador = fila.insertCell();
            let nombre = fila.insertCell();
            let edad = fila.insertCell();
            let sexo = fila.insertCell();

            let img = document.createElement('img');
            img.src = entrenadores[i]['foto'];
            img.classList.add('image');

            foto.appendChild(img);

            numEntrenador.innerHTML = entrenadores[i]['numero_entrenador'];
            entrenadores.innerHTML = entrenadores[i]['nombre_entrenador'];
            edad.innerHTML = entrenadores[i]['edad'];
            sexo.innerHTML = entrenadores[i]['sexo'];

            tipos.innerHTML = pokemons[i]['tipo_1'] + ' ' + pokemons[i]['tipo_2'];
        
        
    }
}

