const express = require('express');
const router = express.Router();
const categoriaController = require('../controller/categoriaController');

// Rutas para las categorías
router.get('/categoria', categoriaController.listarCategoria);
router.get('/categoria/:id', categoriaController.listarCategoriaID);
router.post('/categoria', categoriaController.crearCategoria);
router.put('/categoria/:id', categoriaController.actualizarCategoria);
router.delete('/categoria/:id', categoriaController.eliminarCategoria);

module.exports = router