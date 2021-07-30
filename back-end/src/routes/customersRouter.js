const { Router } = require('express');
const customersController = require('../controllers/customersController');
const salesController = require('../controllers/salesController');
const auth = require('../api/middlewares/isAuthenticated');

const customersRouter = Router();

customersRouter.get('/orders', 
  auth,
  customersController.findAllOrders);

customersRouter.get('/products', customersController.getAllProducts);
customersRouter.post('/checkout', salesController.postSale);
  
module.exports = customersRouter;
