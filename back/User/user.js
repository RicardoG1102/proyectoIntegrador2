//trae las rutas de Usuarios 

const express = require('express');
const app = express.Router();
const User = require('./user.model');
const jwt = require ('jsonwebtoken'); // trae a relacion el jsonwebtoken
const bcrypt =  require ('bcrypt');
// const crypto = require ('crypto');



async function auth (req, res, next) {
    let token = req.headers ['authorization'];
    let resultadoToken = jwt.verify(token, '12345');

    let usuario = await User.findOne({id: resultadoToken.id});
    if (!usuario) {
        throw new Error('usuario no existe')
    }

    req.user = usuario;

    next ();

}



//GET POST, USUARIOS
app.get('/user',auth, 

async function (req, res) {

    let user = await User.findAll();
    
    res.send(user);
});


app.post('/user', async function (req, res) {
    let name = req.body.name;
    let cityId = req.body.city;
    let address = req.body.address;
    let password = req.body.password;
    let email = req.body.correo;
    let phone = req.body.phone;

    let user = await User.create({name: name, CityId:cityId, address : address, password: password, email: email,phone: phone});
    await user.save();
    res.send('Usuario creado con éxito');
});

// registro usuario login con JWT para el token
app.post('/user/signup', async function (req, res) {
    let name = req.body.name;
    let address = req.body.address;
    let phone = req.body.phone;
    let correo = req.body.correo;
    let password = req.body.password;

    
    


    let user = await User.create({correo,password,name,address,phone});
    await user.save();
   
    const token = await jwt.sign({id: user.id}, '12345', { expiresIn: '180000s' });

    res.send({token});
});


// registro usuario login con JWT para el token
app.post('/user/signin', async function (req, res) {
    let name = req.body.name;
    let password = req.body.password;

    let user = await User.findOne({name, password});
    
    
    if (!user) {
        throw new Error("Usuario o contraseña no existe");
    }
   
    const token = await jwt.sign({id: user.id}, '12345', { expiresIn: '180000s' });

    res.send({token});
});


module.exports = app;