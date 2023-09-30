const {Sequelize} = require("sequelize");
const { db } = require("../config/db");

  const Categoria = db.define('categoria', {
    id_categoria: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nombre_categoria: {
      type: Sequelize.STRING(45),
      allowNull: false
    }
  }, { tableName: "categoria", timestamps: false });

  module.exports = Categoria;
