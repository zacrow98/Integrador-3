const express = require('express')
const router = require ('../router/contenido.router')



const app = express()

app.get('/', async(req, res)=>{
    res.send('esto es express')
})

app.use('contenidos', router)

module.exports = app