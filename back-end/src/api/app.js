const express = require('express');
const cors = require('cors');
const path = require('path');
const controller = require('../controllers');

const app = express();
app.use(express.json());

app.use(cors());
app.use('/images', express.static(path.join(__dirname, '../../', 'public')));

app.get('/seller', controller.sellerController);
app.get('/products', controller.getProductsController);
app.post('/login', controller.loginController);
app.post('/register', controller.registerController);
app.post('/sales', controller.checkoutController);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
