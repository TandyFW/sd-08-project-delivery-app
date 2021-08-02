const router = require('express').Router();

const {
  loginController,
  registerController,
  productsController,
  orderController,
  usersController,
} = require('./controllers');

const {
  emailPasswordDataValidation,
  loginUserValidation,
  tokenGeneration,
  userNameDataValidation,
  registerUserValidation,
  tokenValidation,
  orderInfoHandler,
  registerAdminValidation,
  tokenAdminValidation,
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
  tokenValidation,
  productsController.getAll);

router.get('/customer/products/:id',
  tokenValidation,
  productsController.getById);

router.get('/seller',
  usersController.getAllSellers);

router.post('/customer/order',
  tokenValidation,
  orderInfoHandler,
  orderController.createOrder);

router.get('/order',
  tokenValidation,
  orderController.getAllOrders);

router.get('/order/:id',
  tokenValidation,
  orderController.getOrder);

router.put('/order/:id',
  tokenValidation,
  orderController.updateOrderStatus);

router.post('/admin/register',
  tokenAdminValidation,
  emailPasswordDataValidation,
  userNameDataValidation,
  registerAdminValidation,
  registerController.userRegister);

router.get('/admin/users',
  tokenAdminValidation,
  usersController.getCustomerAndSellers);

router.delete('/admin/users/:id',
  tokenAdminValidation,
  usersController.removeUser);

module.exports = router;
