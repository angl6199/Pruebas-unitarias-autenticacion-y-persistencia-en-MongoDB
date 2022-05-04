var express = require('express');
var router = express.Router();
let reservaController = require('../controllers/reserva')
let authenticate = require('./../controllers/authentication')
 
//Listar las reservas
router.get('/', authenticate.validate_Login, reservaController.obtener_reservas_get);

//Añadir nueva reserva
router.get('/:id/create', authenticate.validate_Login, reservaController.reserva_create_get)
router.post('/:id/create', reservaController.reserva_create_post)


module.exports = router;
