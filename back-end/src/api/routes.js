const express = require('express');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const productsController = require('../controllers/productsController');
const orderController = require('../controllers/orderController');

const loginRoute = express.Router();
const registerRoute = express.Router();
const productsRoute = express.Router();
const orderRoute = express.Router();

loginRoute.post('/', loginController.login);

registerRoute.post('/', registerController.createRegister);
registerRoute.get('/', registerController.getAllRegisters);
registerRoute.get('/role/:role', registerController.getByRole);
registerRoute.get('/:id', registerController.getByIdRegister);
registerRoute.put('/:id', registerController.updateByIdRegister); // não é usado no projeto
registerRoute.delete('/:id', registerController.deleteByIdRegister);

productsRoute.get('/', productsController.getAll);

orderRoute.get('/all/:id', orderController.getAllAllorders); // usado nos testes 4 
orderRoute.get('/', orderController.getAllorders); // usadas nos testes 5 e 7
orderRoute.get('/:id', orderController.getByIdorder); // usada nos testes 6 e 8
orderRoute.put('/:id', orderController.updateByIdorder); // usada nos testes 9 e 10
orderRoute.delete('/:id', orderController.deleteByIdorder); // não é usada 

module.exports = {
  loginRoute,
  registerRoute,
  productsRoute,
  orderRoute,
};

// register => login
// user => register
// customer => products
