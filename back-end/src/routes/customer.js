const router = require('express').Router();

const UserController = require('../controllers/user');

router.post('/', UserController.create);

module.exports = router;
