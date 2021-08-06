const express = require('express');
const cors = require('cors');

const TokenAuth = require('../middleware/auth');

const app = express();

app.use(cors());
app.use(express.json()); // app.use(bodyParser.json());
app.use('/images', express.static(`${__dirname}/../../public`));

const userController = require('../controllers/userController');
const saleController = require('../controllers/saleController');
const productController = require('../controllers/productController');

// Já estava no projeto desde o git clone ***VERIFICAR SE PODE TIRAR**
app.get('/coffee', (_req, res) => res.status(418).end());
// ----------------------------------------------------------------------

// utilizado para testar as associações
app.get('/users/sale', userController.getAllUsersSale);
app.get('/sales/user', saleController.getAllSalesUser);
app.get('/sales/products', saleController.getAllSalesProducts);
app.get('/products/sales', productController.getAllProductsSales);
app.get('/users/all', userController.getAllUsers);
// ----------------------------------------------------------------------

// teste Gustavo
app.post('/sales/teste', saleController.createSaleTeste);
app.post('/sales/products', saleController.createSaleProducts);
// ----------------------------------------------------------------------

// teste Ruan
app.get('/relation', saleController.createRelation);
// ----------------------------------------------------------------------

// ROTAS VALIDAS
// userController
app.post('/login', userController.login);
app.post('/register', userController.register);
app.get('/products', productsController.getProducts);
// saleController
app.post('/orders', salesController.getSalesByUser);
app.post('/sales', TokenAuth, salesController.createSale);
app.post('/sale/created', salesController.getGeneratedSell);
app.put('/update/sale', salesController.updateStatusSale);
// productController
app.get('/products', productController.getProducts);

module.exports = app;
