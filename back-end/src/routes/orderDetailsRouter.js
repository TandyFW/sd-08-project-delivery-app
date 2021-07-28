const { Router } = require('express');
const orderDetailsController = require('../controllers/orderDetailsController');

const orderDetailsRouter = Router();

orderDetailsRouter.get('/:id', orderDetailsController.orderDetails);
orderDetailsRouter.put('/:id', orderDetailsController.orderStatusUpdate);

module.exports = orderDetailsRouter;