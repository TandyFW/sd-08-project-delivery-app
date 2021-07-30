const { Router } = require('express');
const orderDetailsController = require('../controllers/orderDetailsController');
const { isAuthenticated, restrictionLevel } = require('../api/middlewares/isAuthenticated');

const orderDetailsRouter = Router();

orderDetailsRouter.get('/:id',
  isAuthenticated(restrictionLevel(2)),
  orderDetailsController.orderDetails);

orderDetailsRouter.put('/:id',
  isAuthenticated(restrictionLevel(2)),
  orderDetailsController.orderStatusUpdate);

module.exports = orderDetailsRouter;
