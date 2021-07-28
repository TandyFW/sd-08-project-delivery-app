const tcw = require('../utils').tryCatchWrapper;
const { registerService } = require('../services');

const registerUser = tcw(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  console.log('register', name, email, password, role);
  const { result, error } = await registerService.validateRegister({ name, email, password, role });
  console.log('register error', error);
  if (error) return next(error);
  res.status(201).json(result);
});

module.exports = {
  registerUser,
};