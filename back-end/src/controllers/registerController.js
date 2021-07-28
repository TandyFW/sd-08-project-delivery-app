const md5 = require('md5');
const { users } = require('../database/models');
const { signToken } = require('../../config/jwtConfig');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const role = 'costumer';
  const user = await users.findOne({
    where: { email },
  });
  const md5pass = md5(password);
  if (!user) {
    const createdUser = await users.create({ name, email, password: md5pass, role });
    const token = await signToken({ user: { id: createdUser.id, role } });
    return res.status(201).json({ name, email, role, token });
  }
  return res.status(409).json('Conflict');
};
