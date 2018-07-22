'use strict';

function registroEntrenador(entrenadores){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrar_entrenador',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            numero_entrenador : entrenadores[0],
            nombre_entrenador : entrenadores[1],
            edad : entrenadores[2],
            sexo : entrenadores[3],
            foto : entrenadores[4]
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}

function obtenerListaEntrenadores(){
    let listaEntrenadores = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listar_entrenadores',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
       console.log(response);
      });
     
      peticion.fail(function(response){
        console.log(response);
      });

      return respuesta;
    console.log(response);
    return listaEntrenadores;
}