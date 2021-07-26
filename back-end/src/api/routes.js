const express = require('express');
const loginController = require('../controllers/loginController');
const userController = require('../controllers/userController');
const customerController = require('../controllers/customerController');

const loginRoute = express.Router();
const userRoute = express.Router();
const customerRoute = express.Router();

loginRoute.get('/', loginController.login);

userRoute.post('/', userController.createUser);
userRoute.get('/', userController.getAllUsers);
userRoute.get('/:id', userController.getByIdUser);
userRoute.put('/:id', userController.updateByIdUser);
userRoute.delete('/:id', userController.deleteByIdUser);

customerRoute.get('/products', customerController.getAllProducts);

// OrderRoute.post('/', OrderController.createOrder); // usado nos testes 4 
// OrderRoute.get('/', OrderController.getAllOrders); // usadas nos testes 5 e 7
// OrderRoute.get('/:id', OrderController.getByIdOrder); // usada nos testes 6 e 8
// OrderRoute.put('/:id', OrderController.updateByIdOrder); // usada nos testes 9 e 10
// OrderRoute.delete('/:id', OrderController.deleteByIdOrder); // não é usada 

module.exports = {
  loginRoute,
  userRoute,
  customerRoute,
};
