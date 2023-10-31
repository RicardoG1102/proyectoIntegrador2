//trae las rutas de Usuarios 

const express = require('express');
const app = express.Router();
const Category = require('./category.model');

//--------------------------------------------------------------------------------------------
//GET POST, CATEGORIAS
app.get('/category', async function (req, res) {

    let category = await Category.findAll();
    
    res.send(category);
});


app.post('/category', async function (req, res) {
    let name = req.body.name;

    let category = await Category.create({name: name});
    await category.save();
    res.send('Categoria creada exitosamente');
});

module.exports = app;