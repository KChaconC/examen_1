
'use strict';

listarEntrenadores();

const inptFiltro = document.querySelector('#buscarE');

inptFiltro.addEventListener('keyup', function () {
    listarEntrenadores(inptFiltro.value);
});


function listarEntrenadores(inptFiltro) {

    let entrenadores = obtenerListaEntrenadores();

    let tbody = document.querySelector('#tblEntrenadores tbody');

    if (!inptFiltro) {
        inptFiltro = ''
    }

    tbody.innerHTML = '';

    for (let i = 0; i < entrenadores.length; i++) {
        if (entrenadores[i]['nombre_entrenador'].toLowerCase().includes(inptFiltro.toLowerCase())) {
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
            nombre.innerHTML = entrenadores[i]['nombre_entrenador'];
            edad.innerHTML = entrenadores[i]['edad'];
            sexo.innerHTML = entrenadores[i]['sexo'];
        }
    }
}

