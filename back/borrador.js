// const express = require('express');
// const app = express();
// const { Sequelize, Model, DataTypes } = require('sequelize');
// const bodyParser = require('body-parser')


// const sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/tiendaproyecto')
// app.use(bodyParser.json());


// //--------------------------------------------------------------------------------------------------
// //tabla ciudades
// class City extends Model { }

// City.init({
//     name: {
//         type: DataTypes.STRING,
//     },
// }, {
//     sequelize,
//     modelName: 'City'
// });

// //--------------------------------------------------------------------------------------------------
// //TABLA USUARIOS
// class User extends Model { }

// User.init({
//     name: {
//         type: DataTypes.STRING,
//     },
//     address: {
//         type: DataTypes.STRING
//     },
//     password: {
//         type: DataTypes.STRING
//     },
//     email:{
//         type: DataTypes.STRING
//     },
//     phone: {
//         type: DataTypes.STRING
//     }
// }, {
//     sequelize,
//     modelName: 'User'
// });

// //------------------------------------------------------------------------
// //TABLA CATEGORIAS
// class Category extends Model { }

// Category.init({
//     name: {
//         type: DataTypes.STRING,
//     },
// }, {
//     sequelize,
//     modelName: 'Category'
// });


// //------------------------------------------------------------------------
// //TABLA PRODUCTOS
// class Product extends Model { }

// Product.init({
//     name: {
//         type: DataTypes.STRING,
//     },
//     price: {
//         type: DataTypes.INTEGER
//     }
// }, {
//     sequelize,
//     modelName: 'Product'
// });

// //RELACION PRODUCTO CATEGORUA
// Category.hasOne(Product);
// Product.belongsTo(Category);


// //------------------------------------------------------------------------
// //TABLA PEDIDO
// class Order extends Model { }

// Order.init({
//     date: {
//         type: DataTypes.DATEONLY,
//     },
//     payment_method: {
//         type: DataTypes.ENUM,
//         values: ['Tarjeta credito','Contraentrega','PSE']
//     }
// }, {
//     sequelize,
//     modelName: 'Order'
// });


// //------------------------------------------------------------------------
// //TABLA CARRITO
// class Cart extends Model { }

// Cart.init({
//    status: {
//         type: DataTypes.ENUM,
//         values: ['Iniciado','Finalizado']
//     }
// }, {
//     sequelize,
//     modelName: 'Cart'
// });

// //------------------------------------------------------------------------
// //TABLA CARRITOXPRODUCTO
// class CartxProduct extends Model { }

// CartxProduct.init({
//    amount: {
//         type: DataTypes.INTEGER,
//     }
// }, {
//     sequelize,
//     modelName: 'CartxProduct'
// });


// //RELACION CARRITOS POR PRODUCTO
// Cart.hasOne(CartxProduct);
// Product.hasOne(CartxProduct);
// CartxProduct.belongsTo(Cart);
// CartxProduct.belongsTo(Product);


// // relacion carritos
// User.hasOne(Cart);
// Product.hasOne(Cart);
// Order.hasOne(Cart);
// Cart.belongsTo(User);
// Cart.belongsTo(Product);
// Cart.belongsTo(Order);


// //RELACIONES usuarios ciduades
// City.hasOne(User);
// User.belongsTo(City);




// //SINCRONIZACIONES
// City.sync();
// User.sync();


// Category.sync();
// Product.sync();
// Order.sync();
// Cart.sync();
// CartxProduct.sync();
// sequelize.sync ();



// app.get('/', function (req, res) {
//     res.send('Pruebas pruebas');
// });

// //--------------------------------------------------------------------------------------------
// //GET POST, CIUDADES
// app.get('/city', async function (req, res) {

//     let city = await City.findAll();
    
//     res.send(city);
// });


// app.post('/city', async function (req, res) {
//     let name = req.body.name;

//     let city = await City.create({name: name});
//     await city.save();
//     res.send('Su ciudad ha sido creada con éxito');
// });



// //------------------------------------------------------------------
// //GET POST, USUARIOS
// app.get('/user', async function (req, res) {

//     let user = await User.findAll();
    
//     res.send(user);
// });


// app.post('/user', async function (req, res) {
//     let name = req.body.name;
//     let cityId = req.body.city;
//     let address = req.body.address;
//     let password = req.body.password;
//     let email = req.body.email;
//     let phone = req.body.phone;

//     let user = await User.create({name: name, CityId:cityId, address : address, password: password, email: email,phone: phone});
//     await user.save();
//     res.send('Usuario creado con éxito');
// });


// //--------------------------------------------------------------------------------------------
// //GET POST, CATEGORIAS
// app.get('/category', async function (req, res) {

//     let category = await Category.findAll();
    
//     res.send(category);
// });


// app.post('/category', async function (req, res) {
//     let name = req.body.name;

//     let category = await Category.create({name: name});
//     await category.save();
//     res.send('Categoria creada exitosamente');
// });


// //--------------------------------------------------------------------------------------------
// //GET POST, PRODUCTOS
// app.get('/product', async function (req, res) {

//     let product = await Product.findAll();
    
//     res.send(product);
// });


// app.post('/product', async function (req, res) {
//     let name = req.body.name;
//     let categoryId= req.body.category;
//     let price= req.body.price;

//     let product = await Product.create({name: name, CategoryId: categoryId, price: price});
//     await product.save();
//     res.send('Producto creado exitosamente');
// });


// //--------------------------------------------------------------------------------------------
// //GET POST, PEDIDO
// app.get('/order', async function (req, res) {

//     let order = await Order.findAll();
    
//     res.send(order);
// });


// app.post('/order', async function (req, res) {
//     let date = req.body.date;
//     let payment_method= req.body.payment_method;

//     let order = await Order.create({date: date, payment_method:payment_method});
//     await order.save();
//     res.send('Pedido generado');
// });

// //--------------------------------------------------------------------------------------------
// //GET POST, CARRITO
// app.get('/cart', async function (req, res) {

//     let cart = await Cart.findAll();
    
//     res.send(cart);
// });


// app.post('/cart', async function (req, res) {
//     let status = req.body.status;
//     let userId = req.body.user;
//     let productId = req.body.product;
//     let orderId = req.body.order;
    

//     let cart = await Cart.create({status:status, UserId: userId, ProductId: productId, OrderId: orderId});
//     await cart.save();
//     res.send('Carrito creado');
// });


// //--------------------------------------------------------------------------------------------
// //GET POST, CARRITO POR PRODUCTO
// app.get('/cartxproduct', async function (req, res) {

//     let cartxproduct = await CartxProduct.findAll();
    
//     res.send(cartxproduct);
// });


// app.post('/cartxproduct', async function (req, res) {
//     let amount = req.body.amount;
//     let productId = req.body.product;
//     let cartId = req.body.cart;
   
    

//     let cartxproduct = await CartxProduct.create({amount: amount, ProductId: productId, CartId: cartId});
//     await cartxproduct.save();
//     res.send('Compra Generada');
// });




// //PUERTO
// app.listen(4000, () => {
//     console.log(`Example app listening on port ${4000}`)
// })