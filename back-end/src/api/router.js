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

router.get('/client/products',
  tokenValidation,
  productsController.getAllProducts);

router.get('/client/products/:id',
  tokenValidation,
  productsController.getProductById);

module.exports = router;
