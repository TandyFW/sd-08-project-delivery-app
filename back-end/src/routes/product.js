const routes = require('express').Router();
const auth = require('../middlewares/auth');

const ProductController = require('../controllers/productController');

routes.get('/', auth, ProductController.getAll);

module.exports = routes;
