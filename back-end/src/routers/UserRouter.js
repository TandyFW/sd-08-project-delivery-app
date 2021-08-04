const express = require('express');
const { getAllUsers } = require('../controllers/UserController');

const userRouter = express();

userRouter.get('/user', getAllUsers);

module.exports = userRouter;
