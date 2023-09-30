const express = require('express')
const router = express.Router()
const repartoController = require("../controller/repartoController")

router.get('/reparto', repartoController.listarReparto)

router.get('/reparto:id', repartoController.listarRepartoID)

router.post('/reparto', repartoController.crearReparto)

router.put('reparto:id', repartoController.actualizarReparto)

router.delete('reparto:id', repartoController.eliminarReparto)

module.exports = router