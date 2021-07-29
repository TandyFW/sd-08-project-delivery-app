const route = require('express').Router();

const auth = require('../middlewares/authentication');

const userController = require('../controllers/userController');
const productsController = require('../controllers/productsController');

route.post('/login', userController.login);
route.get('/get/users', [auth, userController.getAllUsers]);
route.delete('/delete/user/:id', [auth, userController.deleteUserByManager]);
route.post('/register/user', userController.registerClient);
route.post('/register/admin', [auth, userController.registerUserByManager]);
route.get('/products', [auth, productsController.getAllProducts]);

module.exports = route;
