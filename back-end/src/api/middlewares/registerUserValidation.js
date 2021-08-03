/*  Middleware para o registro de usuário 'customer'. Com o status do usuário (role) prédefinido. */

const md5 = require('md5');

const { getUser, registerUser } = require('../services');

module.exports = async (req, res, next) => {
  const { name, email, password } = req.body;
  let { role } = req.body;

  const validUser = await getUser(email, name);
  if (validUser) return res.status(409).json({ message: 'User already registered!' });

  if (!role) role = 'customer';
  const createUser = await registerUser(name, email, md5(password), role);

  req.body.id = createUser.id;
  req.body.name = createUser.name;
  req.body.role = createUser.role;

  next();
};
