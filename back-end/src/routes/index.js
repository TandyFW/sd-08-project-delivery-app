const rootRouter = require('express').Router();
const LoginController = require('../controllers/login');

rootRouter.post('/login', LoginController);

module.exports = rootRouter;
