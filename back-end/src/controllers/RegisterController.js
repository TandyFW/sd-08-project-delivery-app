const { generateJWTToken, create, createByAdmin } = require('../services/UserService');

const createUser = async (req, res) => {
  const newUserInfo = req.body;
  const user = await create(newUserInfo);
  if (user.error) return res.status(user.error.status).json({ message: user.error.message });
  const token = generateJWTToken(newUserInfo);
  return res.status(201).json({ ...user, token });
};

const createUserByAdmin = async (req, res) => {
  const newUserInfo = req.body;
  const user = await createByAdmin(newUserInfo);
  if (user.error) return res.status(user.error.status).json({ message: user.error.message });
  return res.status(201).json({ user });
};

module.exports = { createUser, createUserByAdmin };