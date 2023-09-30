const express = require('express')
const router = express.Router()
const actoresController = require("../controller/actoresController")

router.get('/actores', actoresController.listarActor)
router.get('/actores:id', actoresController.listarActorID)
router.post('/actores', actoresController.crearActor)
router.put('actores:id', actoresController.actualizarActor)
router.delete('actores:id', actoresController.eliminarActor)

module.exports = router