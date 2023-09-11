const { Timestamp } = require("mongodb");
const { Sequelize } = require("sequelize");

const contenido = Sequelize.define('contenido', {
    contenido_id: {
        type: Sequelize.INTERGER,
        autoincrement: true,
        primaryKey: true,
        allowNull: true,
    },
    poster:{
        type: Sequelize.STRING,

    },
    titulo:{
        type: Sequelize.STRING,
        allowNull: true,

    },
    categoria_id:{
        type: Sequelize.INTERGER,
        allowNull: true,
    },
    genero:{
        type: Sequelize.INTERGER,
        allowNull: true,
    },
    resumen:{
        type: Sequelize.STRING,
    },
    temporadas:{
        type: Sequelize.INTERGER,
    },

    tableName: 'contenido',
    Timestamp: false,
    
})

module.export = contenido