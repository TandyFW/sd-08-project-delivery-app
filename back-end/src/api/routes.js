const express = require('express');
const userController = require('../controllers/userController');

const userRoute = express.Router();

userRoute.post('/', userController.create);
userRoute.get('/', userController.getAll);
userRoute.get('/:id', userController.getById);
userRoute.put('/:id', userController.updateById);
userRoute.delete('/:id', userController.deleteById);

module.exports = {
  userRoute,
};