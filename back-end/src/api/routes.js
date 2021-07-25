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

module.exports = {
  loginRoute,
  userRoute,
  customerRoute,
};
