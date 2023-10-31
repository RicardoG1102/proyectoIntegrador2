//--------------------------------------------------------------------------------------------------

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connect');

//------------------------------------------------------------------------
//TABLA CATEGORIAS
class Category extends Model { }

Category.init({
    name: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'Category'
});




Category.sync();
module.exports = Category;