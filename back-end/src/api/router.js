const router = require('express').Router();

const {
  loginController,
  registerController,
} = require('./controllers');

const {
  emailPasswordDataValidation,
  loginUserValidation,
  tokenGeneration,
  userNameDataValidation,
  registerUserValidation,
} = require('./middlewares');

router.post('/login',
  emailPasswordDataValidation,
  loginUserValidation,
  tokenGeneration,
  loginController.userLogin);

router.post('/register',
  emailPasswordDataValidation,
  userNameDataValidation,
  registerUserValidation,
  tokenGeneration,
  registerController.userRegister);

module.exports = router;
