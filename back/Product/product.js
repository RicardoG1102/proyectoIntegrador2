//trae las rutas de Usuarios 

const express = require('express');
const app = express.Router();
const Product = require('./product.model');

//--------------------------------------------------------------------------------------------
//GET POST, PRODUCTOS
app.get('/product', async function (req, res) {

    let product = await Product.findAll();
    
    res.send(product);
});


app.post('/product', async function (req, res) {
    let name = req.body.name;
    let categoryId= req.body.category;
    let price= req.body.price;

    let product = await Product.create({name: name, CategoryId: categoryId, price: price});
    await product.save();
    res.send('Producto creado exitosamente');
});



module.exports = app;