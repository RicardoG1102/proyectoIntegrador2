//trae las rutas de Usuarios 

const express = require('express');
const app = express.Router();
const Order = require('./order.model');

//--------------------------------------------------------------------------------------------
//GET POST, PEDIDO
app.get('/order', async function (req, res) {

    let order = await Order.findAll();
    
    res.send(order);
});


app.post('/order', async function (req, res) {
    let date = req.body.date;
    let payment_method= req.body.payment_method;

    let order = await Order.create({date: date, payment_method:payment_method});
    await order.save();
    res.send('Pedido generado');
});

module.exports = app;