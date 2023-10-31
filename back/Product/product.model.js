const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connect');
const Category = require ('../Category/category.model')

//------------------------------------------------------------------------
//TABLA PRODUCTOS
class Product extends Model { }

Product.init({
    name: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'Product'
});

//RELACION PRODUCTO CATEGORUA
Category.hasOne(Product);
Product.belongsTo(Category);

Product.sync();
module.exports = Product;