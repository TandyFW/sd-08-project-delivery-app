const router = require('express').Router();
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const saleController = require('../controllers/saleController');
const middlewares = require('../middlewares/userValidations');

router.post('/login', userController.validUser);
router.post('/users', middlewares.findUserByNameOrEmail, userController.addUser);
router.get('/users', userController.getAllUsers);

router.get('/products', productController.getAllProducts);

router.get('/sales', saleController.getAllSales);

module.exports = router;
