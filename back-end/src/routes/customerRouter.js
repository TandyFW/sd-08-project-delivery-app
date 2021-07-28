const { Router } = require('express');
// const { celebrate, Joi, Segments } = require('celebrate');
const salesController = require('../controllers/salesController');

const sessionsRouter = Router();

sessionsRouter.post('/checkout', salesController.postSale);

module.exports = sessionsRouter;
