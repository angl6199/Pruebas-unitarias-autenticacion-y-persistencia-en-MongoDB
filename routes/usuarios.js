let express = require('express');
let router = express.Router();
let usuariosController = require('../controllers/usuarios')
let authenticate = require('./../controllers/authentication')

router.get('/', authenticate.validate_Login, usuariosController.list)
router.get('/create', authenticate.validate_Login, usuariosController.create_get)
router.post('/create', usuariosController.create)
router.get('/:id/update', authenticate.validate_Login, usuariosController.update_get)
router.post('/:id/update', usuariosController.update)
router.post('/:id/delete', usuariosController.delete)

module.exports = router;

