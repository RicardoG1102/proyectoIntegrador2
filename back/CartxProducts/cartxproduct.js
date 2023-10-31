//trae las rutas de Usuarios 

const express = require('express');
const app = express.Router();
const CartxProduct = require('./cartxproduct.model');

//--------------------------------------------------------------------------------------------
//GET POST, CARRITO POR PRODUCTO
app.get('/cartxproduct', async function (req, res) {

    let cartxproduct = await CartxProduct.findAll();
    
    res.send(cartxproduct);
});


app.post('/cartxproduct', async function (req, res) {
    let amount = req.body.amount;
    let productId = req.body.product;
    let cartId = req.body.cart;
   
    

    let cartxproduct = await CartxProduct.create({amount: amount, ProductId: productId, CartId: cartId});
    await cartxproduct.save();
    res.send('Compra Generada');
});



module.exports = app;