const { Router } = require('express');
const sellersController = require('../controllers/sellersController');
sellersRouter.get('/', sellersController.getAllSellers);
// const auth = require('../api/middlewares/isAuthenticated');

const sellersRouter = Router();

const { isAuthenticated, restrictionLevel } = require('../api/middlewares/isAuthenticated');
sellersRouter.get('/orders', 
  isAuthenticated(restrictionLevel(2)),
  sellersController.findAll);
  
module.exports = sellersRouter;
