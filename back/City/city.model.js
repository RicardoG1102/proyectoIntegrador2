
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connect');

//--------------------------------------------------------------------------------------------------
//tabla ciudades
class City extends Model { }

City.init({
    name: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'City'
});

City.sync();
module.exports = City;