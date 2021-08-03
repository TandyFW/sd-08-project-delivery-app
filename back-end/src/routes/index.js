const express = require('express');
const { login } = require('../controllers/loginController');
const { getAllProducts } = require('../controllers/productsController');
const { register, getSellers } = require('../controllers/userController');
const { validateEmailExist, validateNameExist } = require('../middlewares/userValidation');

const router = express.Router();

router.post('/login', login);
router.post('/register', validateEmailExist, validateNameExist, register);
router.get('/sellers', getSellers);
router.get('/products', getAllProducts);

module.exports = router;
