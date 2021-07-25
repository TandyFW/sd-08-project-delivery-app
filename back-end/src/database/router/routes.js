const router = require('express').Router();
const controller = require('../controllers/userController');

router.post('/login', controller.validUser);
router.post('/users', controller.addUser);
router.get('/users', controller.getAllUsers);

module.exports = router;
