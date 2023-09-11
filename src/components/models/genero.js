const { Timestamp } = require("mongodb");
const { Sequelize } = require("sequelize");

const genero = Sequelize.define('genero', {
    id: {
        type: Sequelize.INTERGER,
        autoincrement: true,
        primaryKey: true,
        allowNull: true,
    },
    genero:{
        type: Sequelize.STRING,
    },
    tableName: 'genero',
    Timestamp:false,
})

module.exports = genero