const express = require('express');
const userController = require('../controllers/userController');
const customerController = require('../controllers/customerController');

const userRoute = express.Router();
const customerRoute = express.Router();

userRoute.post('/', userController.create);
userRoute.get('/', userController.getAll);
userRoute.get('/:id', userController.getById);
userRoute.put('/:id', userController.updateById);
userRoute.delete('/:id', userController.deleteById);

// executar o arquivo root/db.example.sql para preencher os products
customerRoute.get('/products', customerController.getAllProducts);

module.exports = {
  userRoute,
  customerRoute,
};
