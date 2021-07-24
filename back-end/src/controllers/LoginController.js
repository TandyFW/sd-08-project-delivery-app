const md5 = require('md5');
const { findByEmail } = require('../services/UserService');
const { generateJWTToken } = require('../utils');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(404).json({ message: 'invalid data' });
  const user = await findByEmail(email);
  if (!user || user.password !== md5(password)) {
    return res.status(404).json({ message: 'User not found' });
  }
  const { name, role } = user;
  const token = generateJWTToken(user);
  return res.status(200).json({ name, email, role, token });
};