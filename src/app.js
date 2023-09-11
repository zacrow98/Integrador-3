const express = require('express')
const {sequelize, authenticate, closeConnection} = require("./components/helpers/sequelize")
const app = express()
const PORT = process.env.PORT 

const contenido = require('./components/models/contenido')
const actores = require('./components/models/actores')
const genero = require('./components/models/genero')
const genero_titulo = require('./components/models/genero_titulo')
const reparto = require('./components/models/genero_reparto')

app.get('/contenido', async(req, res) =>{
    try{
        const client = await authenticate()
        if(!client){
            res.status(500).send('Error al conectar a la base de datos')
        }
        const contenido = await contenido.findAll()
        res.json(contenido)

    }catch(error){
        res.status(500).send('Error al obtener los datos')
    }finally{
        await closeConnection()
    }
})

app.listen(PORT, () => {
    
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
