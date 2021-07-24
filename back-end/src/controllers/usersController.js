const rescue = require('express-rescue');
const usersServices = require('../services/usersService');
const { user } = require('../database/models');
const success = require('../utils/success');

const createUser = rescue(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const result = await usersServices.createUsers({ name, email, password, role });
  console.log(result);
  if (result.statusCode) return next(result);
  res.status(success.OK).json({ message: ' create user' });
});

const getAllUsers = rescue(async (_req, res, _next) => {
  const result = await user.findAll();
  res.status(success.OK).json(result);
});

module.exports = {
  createUser,
  getAllUsers,
};
