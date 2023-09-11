const { Timestamp } = require("mongodb");
const { Sequelize } = require("sequelize");

const Reparto = Sequelize.define('reparto', {
    id: {
        type: Sequelize.INTERGER,
        autoincrement: true,
        primaryKey: true,
        allowNull: true,
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

module.exports = reparto