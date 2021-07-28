const { Router } = require('express');
const { celebrate, Joi, Segments } = require('celebrate');
const auth = require('../api/middlewares/isAuthenticated');
const registerController = require('../controllers/registerController');

const registerRouter = Router();

registerRouter.post('/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(12).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    },
  }), registerController.register);

module.exports = registerRouter;
