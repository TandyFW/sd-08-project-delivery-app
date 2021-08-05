const express = require('express');
const AuthAdminController = require('../controllers/AuthAdminController');
const { getAllUsers, deleteUser } = require('../controllers/UserController');

const userRouter = express();

userRouter.get('/user', getAllUsers);
userRouter.delete('/user/:id', AuthAdminController, deleteUser);

module.exports = userRouter;
