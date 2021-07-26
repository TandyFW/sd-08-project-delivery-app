const { Router } = require('express');
const { celebrate, Joi, Segments } = require('celebrate');
const sessionsController = require('../controllers/sessionsController');

const sessionsRouter = Router();

sessionsRouter.post('/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    },
  }), sessionsController.login);

module.exports = sessionsRouter;
