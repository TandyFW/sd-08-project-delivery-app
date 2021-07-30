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
registerRoute.get('/:id', registerController.getByIdRegister);
registerRoute.delete('/:id', registerController.deleteByIdRegister);

productsRoute.get('/', productsController.getAll);

orderRoute.post('/user', orderController.createOrder);
orderRoute.get('/', orderController.getAllOrders); 

module.exports = {
  loginRoute,
  registerRoute,
  productsRoute,
  orderRoute,
};
