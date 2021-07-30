const { Router } = require('express');
const sellersController = require('../controllers/sellersController');
const { isAuthenticated, restrictionLevel } = require('../api/middlewares/isAuthenticated');

const sellersRouter = Router();

sellersRouter.get('/orders', 
  isAuthenticated(restrictionLevel(2)),
  sellersController.findAll);
  
module.exports = sellersRouter;
