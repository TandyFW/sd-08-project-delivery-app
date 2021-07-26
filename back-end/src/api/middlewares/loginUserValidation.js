const md5 = require('md5');

const { getUser } = require('../services');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  const validUser = await getUser(email);

  if (!validUser) return res.status(404).json({ message: 'User not found!' });
  if (md5(password) !== validUser.password) {
    return res.status(403).json({ message: 'Incorrect password!' });
  }
  req.body.id = validUser.id;
  req.body.name = validUser.name;
  req.body.role = validUser.role;

  next();
};
