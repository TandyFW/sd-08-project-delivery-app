// Routes - rotas estabelecidas

const router = require('express').Router();

// controllers usados
const {
  loginController,
  registerController,
  productsController,
  orderController,
  usersController,
} = require('./controllers');

// middlewares usados
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

// POST /login -> para validar o login de um usuário. Usa os atributos 'email' e 'password'.

router.post('/login',
  emailPasswordDataValidation,
  loginUserValidation,
  tokenGeneration,
  loginController.userLogin);

// POST /register -> para o registro de um usuário. Usa os atributos 'name', 'email' e 'password'.

router.post('/register',
  emailPasswordDataValidation,
  userNameDataValidation,
  registerUserValidation,
  tokenGeneration,
  registerController.userRegister);

// GET /customer/products -> para a leitura de todos os produtos. Usa o token JWT de 'Authorization'.

router.get('/customer/products',
  tokenValidation,
  productsController.getAll);

// GET /customer/products/:id -> para a leitura de um produto especifico.
// Usa o token JWT de 'Authorization' e o 'id' do produto pelo parametro na Url

router.get('/customer/products/:id',
  tokenValidation,
  productsController.getById);

// GET /seller -> para a leitura de todos os usuários 'seller'. Usa o token JWT de 'Authorization'.

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
