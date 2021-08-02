/*  Middleware para o registro de usuário por um adminitrador. Com o status do usuário (role) definido pelo admin. */

const md5 = require('md5');

const { getUser, registerUser } = require('../services');

module.exports = async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const validUser = await getUser(email, name);
  if (validUser) return res.status(409).json({ message: 'User already registered!' });

  if (!role) return res.status(400).send({ message: '"role" must not be empty' });

  const createUser = await registerUser(name, email, md5(password), role);

  req.body.id = createUser.id;

  next();
};
