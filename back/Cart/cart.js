//trae las rutas de Usuarios 

const express = require('express');
const app = express.Router();
const Cart = require('./cart.model');

//--------------------------------------------------------------------------------------------
//GET POST, CARRITO
app.get('/cart', async function (req, res) {

    let cart = await Cart.findAll();
    
    res.send(cart);
});


app.post('/cart', async function (req, res) {
    let status = req.body.status;
    let userId = req.body.user;
    let productId = req.body.product;
    let orderId = req.body.order;
    

    let cart = await Cart.create({status:status, UserId: userId, ProductId: productId, OrderId: orderId});
    await cart.save();
    res.send('Carrito creado');
});


module.exports = app;