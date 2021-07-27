const users = require('express').Router();

const CONTROLLERS = require("../controllers/users")
users.post('/login', CONTROLLERS.login);

users.post('/create', CONTROLLERS.register);

module.exports = users;