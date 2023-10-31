const { Sequelize} = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/tiendaproyecto') // conexion a la base de datos postgres

module.exports = sequelize;