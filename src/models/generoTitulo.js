const { Sequelize } = require("sequelize");
const { db } = require("../config/db")

const Genero_titulo = db.define('genero_titulo', {
    id: {
        type: Sequelize.INTERGER,
        autoincrement: true,
        primaryKey: true,
    },
    idTitulo:{
        type: Sequelize.INTERGER,
    },
    idGenero:{
        type: Sequelize.INTERGER,
    },
    tableName: 'genero_titulo',
    Timestamp:false,
})

module.exports = Genero_titulo