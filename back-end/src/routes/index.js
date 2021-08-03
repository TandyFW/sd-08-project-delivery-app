const express = require('express');
const { login } = require('../controllers/loginController');

const { getAllProducts } = require('../controllers/productsController');
const { register, getSellers } = require('../controllers/userController');

const { adminRegister } = require('../controllers/adminController');

const { validateEmailExist, validateNameExist } = require('../middlewares/userValidation');
const authorizationMid = require('../middlewares/authorization');
const { postSale } = require('../controllers/saleController');

const router = express.Router();

router.post('/login', login);
router.post('/register', validateEmailExist, validateNameExist, register);
router.post('/sales', postSale);

router.get('/sellers', getSellers);
router.get('/products', getAllProducts);

router.post('/admin/register', authorizationMid, adminRegister);

module.exports = router;
