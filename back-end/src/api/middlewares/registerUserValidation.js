const { Op } = require('sequelize');
const md5 = require('md5');

const { user } = require('../../database/models');

module.exports = async (req, res, next) => {
  const { name, email, password } = req.body;

  const getUser = await user.findOne({
    where: { [Op.or]: [
      { name },
      { email },
    ] },
  });
  if (getUser) return res.status(409).json({ message: 'User already registered!' });

  const createUser = await user.create({ name, email, password: md5(password), role: 'customer' });

  req.body.id = createUser.id;
  req.body.name = createUser.name;
  req.body.role = createUser.role;

  next();
};
