// Importaciones (modelos)

const contenido = require('../models/contenido')
const categoria = require('../models/categoria')
const actores = require('../models/actores')
const reparto =require('../models/reparto')
const genero = require('../models/genero')
const generoTitulo = require('../models/generoTitulo')

// Configurar relaciones
contenido.hasOne(categoria)


// Configurar la relacion muchos a muchos Actores y Contenido
Contenido.belongsToMany(actores,{through: reparto, foreingKey:'idTitulo'})
actores.belongsToMany(contenido, {through: reparto, foreingKey:'idActor'})

// 
contenido.belongsToMany(genero, {through: generoTitulo, foreingKey: 'idTitulo'})
genero.belongsToMany(contenido, {through: generoTitulo, foreingKey: 'idGenero'})

module.exports = {
    contenido, categoria, actores, reparto, genero, generoTitulo,
};