const md5 = require('md5');
const { users } = require('../database/models');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await users.findOne({
    where: { email },
  });
  const md5pass = md5(password);
  if (!user) {
    await users.create({ name, email, password: md5pass, role: 'costumer' });
    return res.status(201).json('Created');
  }
  return res.status(409).json('Conflict');
};
