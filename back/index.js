const express = require('express');
const sequelize = require('../Back/connect')
const userRouter = require('../Back/User/user');
const cityRouter = require('../Back/City/city');
const categoryRouter= require('../Back/Category/category');
const orderRouter = require('../Back/Order/order');
const cartRouter = require('../Back/Cart/cart');
const productRouter = require('../Back/Product/product');
const cartxproductRouter = require('../Back/CartxProducts/cartxproduct');
const bodyParser = require('body-parser');
const cors  = require('cors'); // libreria que habilita todos los host

const app = express();

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());


app.use(userRouter);
app.use(cityRouter);
app.use(categoryRouter);
app.use(orderRouter);
app.use(cartRouter);
app.use(productRouter);
app.use(cartxproductRouter);




//PUERTO
app.listen(4000, () => {
    console.log(`Example app listening on port ${4000}`)
})