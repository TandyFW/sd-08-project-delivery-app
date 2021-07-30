const { Router } = require('express');
const orderDetailsController = require('../controllers/orderDetailsController');
const auth = require('../api/middlewares/isAuthenticated');

const sellerOrdersDetailsRouter = Router();

sellerOrdersDetailsRouter.get('/:id', auth, orderDetailsController.orderDetails);
sellerOrdersDetailsRouter.put('/:id', auth, orderDetailsController.orderStatusUpdate);

module.exports = sellerOrdersDetailsRouter;