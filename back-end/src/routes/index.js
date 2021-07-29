const express = require('express');
const { login } = require('../controllers/loginController');
const { register } = require('../controllers/userController');
const { validateEmailExist, validateNameExist } = require('../middlewares/userValidation');

const router = express.Router();

router.post('/login', login);
router.post('/register', validateEmailExist, validateNameExist, register);

module.exports = router;
