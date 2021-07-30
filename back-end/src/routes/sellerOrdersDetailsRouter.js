const { Router } = require('express');
const orderDetailsController = require('../controllers/orderDetailsController');
const { isAuthenticated, restrictionLevel } = require('../api/middlewares/isAuthenticated');

const sellerOrdersDetailsRouter = Router();

sellerOrdersDetailsRouter.get('/:id', 
  isAuthenticated(restrictionLevel(2)),
  orderDetailsController.orderDetails);

sellerOrdersDetailsRouter.put('/:id',
  isAuthenticated(restrictionLevel(2)),
  orderDetailsController.orderStatusUpdate);

module.exports = sellerOrdersDetailsRouter;
