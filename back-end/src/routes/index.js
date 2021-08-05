const express = require('express');
const { login } = require('../controllers/loginController');
const { getAllOrdersByCustomer } = require('../controllers/customerController');
const validateUserToken = require('../middlewares/validateUserToken');
const { getAllOrdersBySeller } = require('../controllers/sellerController');

const { getAllProducts } = require('../controllers/productsController');
const { register, getSellers } = require('../controllers/userController');

const { adminRegister } = require('../controllers/adminController');

const { validateEmailExist, validateNameExist } = require('../middlewares/userValidation');
const authorizationMid = require('../middlewares/authorization');
const { postSale } = require('../controllers/saleController');

const router = express.Router();

router.post('/login', login);
router.post('/register', validateEmailExist, validateNameExist, register);
router.get('/customers/:id/orders', validateUserToken, getAllOrdersByCustomer);
router.get('/seller/:id/orders', validateUserToken, getAllOrdersBySeller);
router.post('/sales', authorizationMid, postSale);

router.get('/sellers', getSellers);
router.get('/products', getAllProducts);

router.post('/admin/register', authorizationMid, adminRegister);

module.exports = router;
