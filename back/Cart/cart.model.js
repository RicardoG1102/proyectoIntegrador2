const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connect');
const User = require('../User/user.model');
const Product = require('../Product/product.model'); 
const Order = require('../Order/order.model')

//------------------------------------------------------------------------
//TABLA CARRITO
class Cart extends Model { }

Cart.init({
   status: {
        type: DataTypes.ENUM,
        values: ['Iniciado','Finalizado']
    }
}, {
    sequelize,
    modelName: 'Cart'
});

Cart.sync();
module.exports = Cart;

// relacion carritos
User.hasOne(Cart);
Product.hasOne(Cart);
Order.hasOne(Cart);

Cart.belongsTo(User);
Cart.belongsTo(Product);
Cart.belongsTo(Order);