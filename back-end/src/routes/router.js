const route = require('express').Router();
const auth = require('../middlewares/authentication');

const userController = require('../controllers/userController');
const productsController = require('../controllers/productsController');
const saleController = require('../controllers/saleController');

route.post('/login', userController.login);
route.get('/get/users', [auth, userController.getAllUsers]);
route.delete('/delete/user/:id', [auth, userController.deleteUserByManager]);
route.post('/register/user', userController.registerClient);
route.post('/register/admin', [auth, userController.registerUserByManager]);
route.get('/products', [auth, productsController.getAllProducts]);
route.post('/register/sale', saleController.registerSale);
route.get('/get/seller', [auth, userController.getAllSeller]);

module.exports = route;
