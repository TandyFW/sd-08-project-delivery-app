const { Router } = require('express');
const customersController = require('../controllers/customersController');
const { isAuthenticated, restrictionLevel } = require('../api/middlewares/isAuthenticated');

const customersRouter = Router();

customersRouter.get('/orders', 
isAuthenticated(restrictionLevel(3)),
  customersController.findAll);
  
module.exports = customersRouter;
