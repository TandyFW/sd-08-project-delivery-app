const { Router } = require('express');
const customersController = require('../controllers/customersController');
const auth = require('../api/middlewares/isAuthenticated');

const customersRouter = Router();

customersRouter.get('/orders', 
  auth,
  customersController.findAllOrders);

customersRouter.get('/products', customersController.getAllProducts);
  
module.exports = customersRouter;
