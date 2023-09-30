const express = require('express')
const router = express.Router()
const generoController = require("../controller/generoController")

router.get('/genero', generoController.listarGenero)
router.get('/genero:id', generoController.listarGeneroID)
router.post('/genero', generoController.crearGenero)
router.put('genero:id', generoController.actualizarGenero)
router.delete('genero:id', generoController.eliminarGenero)

module.exports = router