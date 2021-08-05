const boom = require('@hapi/boom');
const { User } = require('../database/models');
const UserSchema = require('../schemas/user');
const md5 = require('../utils/md5');

const findByEmail = async (email) => User.findOne({ where: { email } });

const create = async (userData) => {
  const { error } = UserSchema.validate(userData);
  if (error) throw error;

  const { name, email, password, role = 'customer' } = userData;

  const user = await findByEmail(email);
  if (user) throw boom.conflict('User already exists');

  const hashedPassword = md5(password);
  const newUser = await User.create({ name, email, password: hashedPassword, role });
  
  return { id: newUser.id, name, email };
};

const adminCreate = async (userData) => {
  const { error } = UserSchema.validate(userData);
  if (error) throw error;

  const { name, email, password, role } = userData;

  const user = await findByEmail(email);
  if (user) throw boom.conflict('User already exists');

  const hashedPassword = md5(password);
  const newUser = await User.create({ name, email, password: hashedPassword, role });
  
  return { id: newUser.id, name, email, role };
};

module.exports = {
  findByEmail,
  create,
  adminCreate,
};
