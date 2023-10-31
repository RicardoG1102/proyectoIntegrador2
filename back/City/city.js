const express = require('express');
const app = express.Router();
const City = require('./city.model');




//--------------------------------------------------------------------------------------------
//GET POST, CIUDADES
app.get('/city', async function (req, res) {

    let city = await City.findAll();
    
    res.send(city);
});


app.post('/city', async function (req, res) {
    let name = req.body.name;

    let city = await City.create({name: name});
    await city.save();
    res.send('Su ciudad ha sido creada con éxito');
});

module.exports = app;