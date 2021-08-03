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

// POST /customer/order -> para o registro de uma venda. Usa os atributos 'sellerId', 'totalPrice', 'deliveryAddress' e 'deliveryNumber'.
// os outros atributos são gerados automaticamente.
router.post('/customer/order',
  tokenValidation,
  orderInfoHandler,
  orderController.createOrder);

// GET /order -> para a leitura de todos as vendas da tabela 'sales' de um usuário.
// Usa o token JWT de 'Authorization', para identificar o usuário.
router.get('/order',
  tokenValidation,
  orderController.getAllOrders);

// GET /order -> para a leitura especifica de uma vendas da tabela 'sales' de um usuário.
// Usa o token JWT de 'Authorization', para identificar o usuário. E usa o parametro 'id' na Url para identificar a venda.
router.get('/order/:id',
  tokenValidation,
  orderController.getOrder);

// PUT /order/:id -> para a atualizaçãodo status de uma vendas da tabela 'sales'. Usa o token JWT de 'Authorization'.
router.put('/order/:id',
  tokenValidation,
  orderController.updateOrderStatus);

// POST /admin/register -> para o registro de um usuário por um Admin. Usa os atributos 'name', 'email', 'password' e 'role'.
// Usa o token JWT de 'Authorization', para validar se é um administrador.
router.post('/admin/register',
  tokenAdminValidation,
  emailPasswordDataValidation,
  userNameDataValidation,
  registerAdminValidation,
  registerController.userRegister);

// GET /customer/products -> para a leitura de todos os usuários para um Admin.
// Usa o token JWT de 'Authorization', para validar se é um administrador.
router.get('/admin/users',
  tokenAdminValidation,
  usersController.getCustomerAndSellers);

//DELETE /admin/users/:id -> para a remoção de um usuário por um Admin.
// Usa o token JWT de 'Authorization', para validar se é um administrador.
router.delete('/admin/users/:id',
  tokenAdminValidation,
  usersController.removeUser);

module.exports = router;
