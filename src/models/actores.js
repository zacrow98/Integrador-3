const {Sequelize} = require("sequelize");
const { db } = require("../config/db")

const Actores = db.define('actores', {
    id_actor: {
        type: Sequelize.INTERGER,
        autoincrement: true,
        primaryKey: true,
        allowNull: false,
    },
    nombre_actor:{
        type: Sequelize.STRING,
    },
    tableName: 'actores',
    Timestamp:false,
})

module.exports = Actores