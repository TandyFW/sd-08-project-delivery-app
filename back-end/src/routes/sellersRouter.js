const { Router } = require('express');
const sellersController = require('../controllers/sellersController');
const orderDetailsController = require('../controllers/orderDetailsController');
const { isAuthenticated, restrictionLevel } = require('../api/middlewares/isAuthenticated');

const sellersRouter = Router();

sellersRouter.get('/', sellersController.getAllSellers);
sellersRouter.get('/orders', 
  isAuthenticated(restrictionLevel(2)),
  sellersController.findAll);

sellersRouter.get('/orders/:id', 
  isAuthenticated(restrictionLevel(2)),
  orderDetailsController.orderDetails);

sellersRouter.put('/orders/:id',
  isAuthenticated(restrictionLevel(2)),
  orderDetailsController.orderStatusUpdate);
  
module.exports = sellersRouter;
