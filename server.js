const express = require('express');
const app = express();
const { db } = require('./src/config/db');
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(async (req, res, next) => {
  try {
    await db.authenticate();
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error en el servidor', description: error.message });
  }
});

const ActoresRouter = require('./src/router/actores.router')
const CategoriaRouter = require('./src/router/categoria.router')
const ContenidoRouter = require('./src/router/contenido.router')
const GeneroRouter = require('./src/router/genero.router')
const GeneroTituloRouter = require('./src/router/generoTitulo.router')
const Reparto = require('./src/router/reparto.router')

app.get("/", (req, res) => {
  res.status(200).end('Bienvenido a la API TrailerFlix hecha con MySQL y Sequelize');
});

app.use('/api', CategoriaRouter);
app.use('/api', ActoresRouter);
app.use('/api', ContenidoRouter);
app.use('/api', GeneroRouter)
app.use('/api', GeneroTituloRouter)
app.use('/api', Reparto )

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});