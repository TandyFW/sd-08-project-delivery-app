const route = require('express').Router();

const auth = require('../middlewares/authentication');

const userController = require('../controllers/userController');
const productsController = require('../controllers/productsController');

route.post('/login', userController.login);
route.post('/register/user', userController.registerClient);
route.get('/products', [auth, productsController.getAllProducts]);

module.exports = route;
