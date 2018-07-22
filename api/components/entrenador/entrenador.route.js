'use strict';
const express = require('express');
const router = express.Router();
const entrenador = require('./entrenador.api');


router.route('/registrar_entrenador')
    .post(function (req, res) {
        entrenador.registrar(req, res);
    });
    module.exports = router;

router.route('/listar_entrenadores')
    .get(function(req, res) {
        entrenador.listarEntrenadores(req, res);
    });
    module.exports = router;