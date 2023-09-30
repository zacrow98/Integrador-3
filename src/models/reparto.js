const { Sequelize } = require("sequelize");
const { db } = require("../config/db")

const Reparto = db.define('reparto', {
    id: {
        type: Sequelize.INTERGER,
        autoincrement: true,
        primaryKey: true,
        allowNull: false,
    },
    idTitulo:{
        type: Sequelize.INTERGER,
    },
    idActor:{
        type: Sequelize.INTERGER,
    },
    tableName: 'reparto',
    Timestamp:false,
})

module.exports = Reparto