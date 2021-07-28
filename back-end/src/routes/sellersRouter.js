const { Router } = require('express');
const sellersController = require('../controllers/sellersController');
const auth = require('../api/middlewares/isAuthenticated');

const sellersRouter = Router();

sellersRouter.get('/orders', 
  auth,
  sellersController.findAll);
  
module.exports = sellersRouter;
