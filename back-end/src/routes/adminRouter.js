const { Router } = require('express');
const { celebrate, Joi, Segments } = require('celebrate');
const { isAuthenticated, restrictionLevel } = require('../api/middlewares/isAuthenticated');
const adminController = require('../controllers/adminController');

const adminRouter = Router();

adminRouter.post('/manage',
  celebrate({
  [Segments.BODY]: {
    name: Joi.string().min(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().required(),
  } }),
  isAuthenticated(restrictionLevel(1)),
  adminController.createUser);

adminRouter.get('/manage',
isAuthenticated(restrictionLevel(1)),
  adminController.getAllUsers);

module.exports = adminRouter;
