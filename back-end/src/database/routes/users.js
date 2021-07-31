const users = require('express').Router();

const CONTROLLERS = require("../controllers/users")
const validateJWT = require('../middlewares/validateJWT');

users.post('/login', CONTROLLERS.login);

users.post('/create', CONTROLLERS.register);

users.get('/sellers', CONTROLLERS.getAllSellers);

users.get('/:id', validateJWT, CONTROLLERS.getUserById);

users.get('/', CONTROLLERS.getAllUsers);


module.exports = users;