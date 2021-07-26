const md5 = require('md5');

const { user } = require('../../database/models');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  const getUser = await user.findOne({
    where: { email },
  });
  if (!getUser) return res.status(404).json({ message: 'User not found!' });
  if (md5(password) !== getUser.password) {
    return res.status(403).json({ message: 'Incorrect password!' });
  }
  req.body.id = getUser.id;
  req.body.name = getUser.name;
  req.body.role = getUser.role;

  next();
};
