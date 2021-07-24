const express = require('express');
const usersController = require('../controllers/usersController');
const customerController = require('../controllers/customerController');

const usersRoute = express.Router();
const customerRoute = express.Router();

usersRoute.post('/', usersController.createUser);

usersRoute.get('/get', usersController.getAllUsers);

//executar o arquivo root/db.example.sql para preencher os products
customerRoute.get('/products', customerController.getAllProducts);

module.exports = {
  usersRoute,
  customerRoute,
};
