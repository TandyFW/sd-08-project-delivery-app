const rescue = require('express-rescue');
const usersServices = require('../services/usersService');
const success = require('../utils/success');

const createUser = rescue(async (req, res, _next) => {
  const { name, email, password, role } = req.body;
  await usersServices.createUsers({ name, email, password, role });
  res.status(success.OK).json({ message: ' create user' });
});

module.exports = {
  createUser,
};
