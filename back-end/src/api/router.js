const router = require('express').Router();

const loginController = require('./controllers/loginController');

const { loginDataValidation, loginValidation, tokenGeneration } = require('./middlewares');

router.post('/login',
loginValidation,
loginDataValidation,
tokenGeneration,
loginController.userLogin);

module.exports = router;
