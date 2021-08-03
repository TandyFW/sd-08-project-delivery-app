const express = require('express');
const { login } = require('../controllers/loginController');
const { getAllOrdersByCustomer } = require('../controllers/ordersController');
const { register } = require('../controllers/userController');
const { validateEmailExist, validateNameExist } = require('../middlewares/userValidation');
const validateUserToken = require('../middlewares/validateUserToken');

const router = express.Router();

router.post('/login', login);
router.post('/register', validateEmailExist, validateNameExist, register);
router.get('/costumer/orders', validateUserToken, getAllOrdersByCustomer);

module.exports = router;
