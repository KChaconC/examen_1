'use strict';
const entrenadorModel = require('./entrenador.model');

//Función para registrar un entrenador
module.exports.registrar = function(req, res){
    //Crea una variable nuevoEntrenador utilizando como plantilla el entrenadorModel
    let nuevoEntrenador = new entrenadorModel({
        numero_entrenador: req.body.numero_entrenador,
        nombre_entrenador: req.body.nombre_entrenador,
        edad : req.body.edad,
        sexo : req.body.sexo,
        foto : req.body.foto
        
    });

    nuevoEntrenador.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el entrenador, ocurrió el siguiente error' + error});
        }else{
            res.json({success : true, msg : 'El entrenador se registró con éxito'});
        }

    });

};

module.exports.listarEntrenadores = function(req, res){
    entrenadorModel.find().then(
        function(entrenadores){
            res.send(entrenadores);
        });
};

// module.exports.asignar_pokemon = function(req, res){
    
//     entrenadorModel.update(
//         {_id: req.body._id}, 
//         {$push: 
//             {'pokemons':
//                 {
//                     num_pokedex: req.body.num_pokedex, 
//                     nombre_pokemon: req.body.nombre_pokemon, 
//                 }
//             }
//         },
//         function(error){
//             if(error){
//                 res.json({success : false, msg : 'No se pudo asignar el pokemon, ocurrió el siguiente error' + error});
//             }else{
//                 res.json({success : true, msg : 'El pokémon se asignó con éxito'});
//             }
//         }
//     )
// };