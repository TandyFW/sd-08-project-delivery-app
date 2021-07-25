const router = require('express').Router();
const controller = require('../controllers/userController');

router.post('/users', controller.validUser);

module.exports = router;
