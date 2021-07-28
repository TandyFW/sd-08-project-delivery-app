const router = require('express').Router();

const {
  loginController,
  registerController,
  productsController,
} = require('./controllers');

const {
  emailPasswordDataValidation,
  loginUserValidation,
  tokenGeneration,
  userNameDataValidation,
  registerUserValidation,
  tokenValidation,
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

router.get('/customer/products',
  productsController.getAll);

router.get('/customer/products/:id',
  productsController.getById);

module.exports = router;
