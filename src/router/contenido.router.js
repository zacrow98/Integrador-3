const express = require('express')
const router = express.Router()
const contenidoController = require("../controller/contenidoController")

router.get('/contenido', contenidoController.listarContenido)

router.get('/contenido:id', contenidoController.listarContenidoID)

router.post('/contenido', contenidoController.crearContenido)

router.put('contenido:id', contenidoController.actualizarContenido)

router.delete('contenido:id', contenidoController.eliminarContenido)

module.exports = router