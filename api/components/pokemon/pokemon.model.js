'use strict';
let mongoose = require('mongoose');
//esquema que mongoose utiliza para mapear o establecer los tipos de los datos
let pokeSchema = new mongoose.Schema({
    nombre_cliente : {type : String, required : true},
    numero_pokedex : {type: String, required: true},
    nombre_pokemon : {type: String, required: true},
    tipo_1 : {type: String, required: true},
    tipo_2 : {type: String},
    foto : {type: String, required: true}
});

module.exports = mongoose.model('Pokemon', pokeSchema);