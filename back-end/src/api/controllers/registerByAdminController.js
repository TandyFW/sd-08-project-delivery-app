const tcw = require('../utils').tryCatchWrapper;
const { userService } = require('../services');

const register = tcw(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const { result, error } = await userService.validateRegister({ name, email, password, role });
  if (error) return next(error);
  res.status(201).json(result);
});

module.exports = {
  register,
};