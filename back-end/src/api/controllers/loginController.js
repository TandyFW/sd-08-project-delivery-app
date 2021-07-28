const tcw = require('../utils').tryCatchWrapper;
const { userService } = require('../services');

const login = tcw(async (req, res, next) => {
  const { email, password } = req.body;
  const { result, error } = await userService.validateLogin({ email, password });
  if (error) return next(error);
  res.status(200).json(result);
});

module.exports = {
  login,
};
