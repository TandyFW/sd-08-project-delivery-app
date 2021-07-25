const express = require('express');
const loginController = require('../controllers/loginController');
const userController = require('../controllers/userController');
const customerController = require('../controllers/customerController');

const loginRoute = express.Router();
const userRoute = express.Router();
const customerRoute = express.Router();

loginRoute.get('/', loginController.login);

userRoute.post('/', userController.create);
userRoute.get('/', userController.getAll);
userRoute.get('/:id', userController.getById);
userRoute.put('/:id', userController.updateById);
userRoute.delete('/:id', userController.deleteById);

customerRoute.get('/products', customerController.getAllProducts);

module.exports = {
  userRoute,
  customerRoute,
  loginRoute,
};
