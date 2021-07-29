const router = require('express').Router();
const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const saleController = require('../controllers/saleController');
const middlewares = require('../middlewares/userValidations');
const auth = require('../middlewares/auth');

router.post('/login', auth.generateToken, userController.validUser);
router.post('/users', middlewares.findUserByNameOrEmail, userController.addUser);
router.get('/users', userController.getAllUsers);
router.get('/sellers', userController.getAllSellers);

router.get('/products', productController.getAllProducts);

router.get('/sales', saleController.getAllSales);
router.post('/sales', auth.verifyToken, saleController.createSales);

module.exports = router;
