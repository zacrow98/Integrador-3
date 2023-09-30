const Sequelize = require("sequelize");
const dotenv = require('dotenv')
dotenv.config()

const { BBDD, USERNAME, PASSWORD, HOST } = process.env;

const db = new Sequelize(BBDD, USERNAME, PASSWORD, {
  host: HOST,
  dialect: "mysql",
});

module.exports = { db }; 