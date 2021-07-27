const express = require('express');
const cors = require('cors');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const path = require('path');
const getProducts = require('../controllers/getProducts');

const app = express();
app.use(express.json());

app.use(cors());
app.use('/images', express.static(path.join(__dirname, '../../', 'public')));

app.get('/products', getProducts)
app.post('/login', loginController);
app.post('/register', registerController);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
