//--------------------------------------------------------------------------------------------------

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connect');
const City = require('../City/city.model');

//TABLA USUARIOS
class User extends Model { }

User.init({
    name: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    correo:{
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'User'
});


User.belongsTo(City);

User.sync();
module.exports = User;