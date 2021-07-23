const express = require('express');
const usersController = require('../controllers/usersController');

const usersRoute = express.Router();

usersRoute.post('/', usersController.createUser);

module.exports = {
  usersRoute,
};