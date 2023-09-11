const { Timestamp } = require("mongodb");
const { Sequelize } = require("sequelize");

const Actores = Sequelize.define('actores', {
    id: {
        type: Sequelize.INTERGER,
        autoincrement: true,
        primaryKey: true,
        allowNull: true,
    },
    actor_nombre:{
        type: Sequelize.STRING,
    },
    tableName: 'actores',
    Timestamp:false,
})

module.exports = Actores