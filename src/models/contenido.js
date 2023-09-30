
const { Sequelize } = require("sequelize");
const { db } = require("../config/db")

const Contenido = db.define('contenido', {
    id: {
        type: Sequelize.INTERGER,
        autoincrement: true,
        primaryKey: true,
    },
    poster:{
        type: Sequelize.STRING,

    },
    titulo:{
        type: Sequelize.STRING,

    },
    categoria:{
        type: Sequelize.INTERGER,
    },
    resumen:{
        type: Sequelize.STRING
    },
    trailer:{
        type: Sequelize.STRING,
    },
    temporadas:{
        type: Sequelize.INTERGER,
    },
    reparto:{
        type: Sequelize.STRING,
    },

    tableName: 'contenido',
    timestamp: false,
    
})

module.export = Contenido