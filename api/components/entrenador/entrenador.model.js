'use strict';

let mongoose = require('mongoose');

let entrenadorSchema = new mongoose.Schema({
    numero_entrenador : {type: String, required: true},
    nombre_entrenador: {type: String, required: true},
    edad : {type: String, required: true},
    sexo : {type: String, required: true},
    foto : {type: String},
    pokemons: [ 
        {
            numero_pokedex : {type: String},
            nombre_pokemon : {type: String}
        }
    ]

});

module.exports = mongoose.model('Entrenador', entrenadorSchema);