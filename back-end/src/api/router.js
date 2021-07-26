const router = require('express').Router();

const loginController = require('./controllers/loginController');

const { loginDataValidation, loginUserValidation, tokenGeneration } = require('./middlewares');

router.post('/login',
  loginDataValidation,
  loginUserValidation,
  tokenGeneration,
  loginController.userLogin);

router.post('/register',);


module.exports = router;
