const router = require('express').Router();

const loginController = require('./controllers/loginController');

const loginDataValidation = require('./middlewares/loginDataValidation');

router.post('/login', loginDataValidation, loginController.userLogin);

module.exports = router;
