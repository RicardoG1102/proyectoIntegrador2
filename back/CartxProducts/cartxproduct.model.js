
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connect');
const Cart = require('../Cart/cart.model');
const Product = require ('../Product/product.model');

//------------------------------------------------------------------------
//TABLA CARRITOXPRODUCTO
class CartxProduct extends Model { }

CartxProduct.init({
   amount: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize,
    modelName: 'CartxProduct'
});

CartxProduct.sync();
module.exports = CartxProduct;


//RELACION CARRITOS POR PRODUCTO
Cart.hasOne(CartxProduct);
Product.hasOne(CartxProduct);
CartxProduct.belongsTo(Cart);
CartxProduct.belongsTo(Product);