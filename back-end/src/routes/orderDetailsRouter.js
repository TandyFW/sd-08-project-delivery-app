const { Router } = require('express');
const orderDetailsController = require('../controllers/orderDetailsController');
const auth = require('../api/middlewares/isAuthenticated');

const orderDetailsRouter = Router();

orderDetailsRouter.get('/:id', auth, orderDetailsController.orderDetails);
orderDetailsRouter.put('/:id', auth, orderDetailsController.orderStatusUpdate);

module.exports = orderDetailsRouter;