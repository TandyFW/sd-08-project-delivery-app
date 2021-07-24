const { create } = require('../services/UserService');
const { generateJWTToken } = require('../utils');

module.exports = async (req, res) => {
  const newUserInfo = req.body;
  const user = await create(newUserInfo);
  if (user.error) return res.status(user.error.status).json(user.error.message);
  const token = generateJWTToken(newUserInfo);
  return res.status(201).json({ ...user, token });
};