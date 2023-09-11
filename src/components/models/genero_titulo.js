const { Timestamp } = require("mongodb");
const { Sequelize } = require("sequelize");

const genero_titulo = Sequelize.define('genero_titulo', {
    id: {
        type: Sequelize.INTERGER,
        autoincrement: true,
        primaryKey: true,
        allowNull: true,
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

module.exports = genero_titulo