const users = require('express').Router();

const CONTROLLERS = require("../controllers/users");

users.post('/login', CONTROLLERS.login);

users.post('/create', CONTROLLERS.register);

users.post('/admin', CONTROLLERS.adminRegister);

// users.delete('/admin', CONTROLLERS.deleteUser);

users.get('/', CONTROLLERS.getAllUsers);

users.get('/sellers', CONTROLLERS.getAllSellers);

module.exports = users;