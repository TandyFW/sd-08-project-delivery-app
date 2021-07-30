const { Router } = require('express');
const sellersController = require('../controllers/sellersController');
// const auth = require('../api/middlewares/isAuthenticated');

const sellersRouter = Router();

sellersRouter.get('/', sellersController.getAllSellers);
  
module.exports = sellersRouter;
