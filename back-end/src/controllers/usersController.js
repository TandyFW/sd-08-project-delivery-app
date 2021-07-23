const rescue = require('express-rescue');
const usersServices = require('../services/usersService');
const success = require('../utils/success');

const createUser = rescue(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const result = await usersServices.createUsers({ name, email, password, role });
  console.log(result);
  if (result.statusCode) return next(result);
  res.status(success.OK).json({ message: ' create user' });
});

module.exports = {
  createUser,
};
