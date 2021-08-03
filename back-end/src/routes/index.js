const express = require('express');
const { login } = require('../controllers/loginController');
<<<<<<< HEAD
const { getAllProducts } = require('../controllers/productsController');
const { register, getSellers } = require('../controllers/userController');
=======
const { register } = require('../controllers/userController');
const { adminRegister } = require('../controllers/adminController');
>>>>>>> 8c3c67b1d9bcb7f014ce42325f5b9178c90d7412
const { validateEmailExist, validateNameExist } = require('../middlewares/userValidation');
const authorizationMid = require('../middlewares/authorization');

const router = express.Router();

router.post('/login', login);
router.post('/register', validateEmailExist, validateNameExist, register);
<<<<<<< HEAD
router.get('/sellers', getSellers);
router.get('/products', getAllProducts);
=======
router.post('/admin/register', authorizationMid, adminRegister);
>>>>>>> 8c3c67b1d9bcb7f014ce42325f5b9178c90d7412

module.exports = router;
