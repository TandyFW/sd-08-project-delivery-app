const express = require('express');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const productsController = require('../controllers/productsController');

const loginRoute = express.Router();
const registerRoute = express.Router();
const productsRoute = express.Router();

loginRoute.post('/', loginController.login);

registerRoute.post('/', registerController.createRegister);
registerRoute.get('/', registerController.getAllRegisters);
registerRoute.get('/:id', registerController.getByIdRegister);
registerRoute.put('/:id', registerController.updateByIdRegister); // não é usado no projeto
registerRoute.delete('/:id', registerController.deleteByIdRegister);

productsRoute.get('/', productsController.getAll);
// TODO COLOCAR O md5 para funcicd 
// 098f6bcd4621d373cade4e832627b4f6 -- hash test https://www.md5hashgenerator.com - Hugo
// 098f6bcd4621d373cade4e832627b4f6 -- hash test https://www.md5hashgenerator.com - Hugo
// OrderRoute.post('/', OrderController.createOrder); // usado nos testes 4 
// OrderRoute.get('/', OrderController.getAllOrders); // usadas nos testes 5 e 7
// OrderRoute.get('/:id', OrderController.getByIdOrder); // usada nos testes 6 e 8
// OrderRoute.put('/:id', OrderController.updateByIdOrder); // usada nos testes 9 e 10
// OrderRoute.delete('/:id', OrderController.deleteByIdOrder); // não é usada 

module.exports = {
  loginRoute,
  registerRoute,
  productsRoute,
};

// register => login
// user => register
// customer => products
