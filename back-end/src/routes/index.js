const express = require('express');
const { login } = require('../controllers/loginController');
const { getAllOrdersByCustomer } = require('../controllers/customerController');
const { register } = require('../controllers/userController');
const { validateEmailExist, validateNameExist } = require('../middlewares/userValidation');
const validateUserToken = require('../middlewares/validateUserToken');
const { getAllOrdersBySeller } = require('../controllers/sellerController');

const router = express.Router();

router.post('/login', login);
router.post('/register', validateEmailExist, validateNameExist, register);
router.get('/customers/:id/orders', validateUserToken, getAllOrdersByCustomer);
router.get('/seller/:id/orders', validateUserToken, getAllOrdersBySeller);

module.exports = router;
