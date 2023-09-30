const { Sequelize } = require("sequelize");
const { db } = require("../config/db")

const Genero = db.define('genero', {
    id_genero: {
        type: Sequelize.INTERGER,
        autoincrement: true,
        primaryKey: true,
    },
    genero:{
        type: Sequelize.STRING,
    },
    tableName: 'genero',
    Timestamp:false,
})

module.exports = Genero