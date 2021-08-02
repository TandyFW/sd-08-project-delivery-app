const express = require('express');
const { login } = require('../controllers/loginController');
const { register } = require('../controllers/userController');
const { adminRegister } = require('../controllers/adminController');
const { validateEmailExist, validateNameExist } = require('../middlewares/userValidation');
const authorization = require('../middlewares/authorization');

const router = express.Router();

router.post('/login', login);
router.post('/register', validateEmailExist, validateNameExist, register);
router.post('/admin/register', authorization, adminRegister);

module.exports = router;
