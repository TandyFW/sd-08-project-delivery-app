const { user } = require("../models");
const md5 = require("md5");
const createUser = async ({ name, email, password }) => {
  try {
    const newUser = { name, email, password: md5(password), role: "customer" };
    const registredUser = await user.create(newUser);
    return registredUser;
  } catch (error) {
    return error.message;
  }
};

const getUsers = async () => {
  try {
    const users = await user.findAll();
    return users;
  } catch (error) {
    return error.message;
  }
};

const validUser = async (email) => {
  const findUser = await user.findOne({ where: { email } });
  if (!findUser) throw new Error("Not found");

  return findUser;
};

module.exports = {
  validUser,
  createUser,
  getUsers,
};
