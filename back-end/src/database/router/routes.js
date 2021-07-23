const router = require('express').Router();
const controller = require('../controllers/userController');

router.post('/', controller.validUser);

module.exports = router;
