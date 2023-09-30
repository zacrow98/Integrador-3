const express = require('express')
const router = express.Router()
const generoTituloController = require("../controller/generoTituloController")

router.get('/generoTitulo', generoTituloController.listarGeneroTitulo)

router.get('/generoTitulo:id', generoTituloController.listarGeneroTituloID)

router.post('/generoTitulo', generoTituloController.crearGeneroTitulo)

router.put('generoTitulo:id', generoTituloController.actualizarGeneroTitulo)

router.delete('generoTitulo:id', generoTituloController.eliminarGeneroTitulo)

module.exports = router