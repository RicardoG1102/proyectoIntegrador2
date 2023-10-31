const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connect');

//------------------------------------------------------------------------
//TABLA PEDIDO
class Order extends Model { }

Order.init({
    date: {
        type: DataTypes.DATEONLY,
    },
    payment_method: {
        type: DataTypes.ENUM,
        values: ['Tarjeta credito','Contraentrega','PSE']
    }
}, {
    sequelize,
    modelName: 'Order'
});

Order.sync();
module.exports = Order;