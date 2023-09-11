const Sequelize = require("sequelize");

const sequelize = new sequelize(process.env.BBDD, process.env.USERNAME, process.env.PASSWORD, {
  host: process.env.HOST,
  port:process.env.PORT,
  dialect: "mssql",
  dialectOptions: { options: { encrypt: true } },
  define: { timetamps: false },
});

async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log("Conexion establecida");
  } catch (error) {
    console.error("Error al conectar a la base de datos", error);
  }
}

async function closeConnection(){
    try{
        await sequelize.close()
        console.log('Conexion finalizada');
    }catch(error){
        console.error('Error al cerrar conexion', error);
    }
}