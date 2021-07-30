const {
  StatusCodes,
  getReasonPhrase,
} = require('http-status-codes');
const { Op } = require('sequelize');
const md5 = require('md5');
const { users } = require('../database/models');
const HandleError = require('../utils/handleError');

const auth = async ({ name, email }) => {
  const user = await users.findOne({
    where: {
      [Op.or]: [
        { name },
        { email },
      ],
    },
  });
  if (user) {
    throw new HandleError(
      'Nome ou email já em uso', StatusCodes.CONFLICT,
      getReasonPhrase(StatusCodes.CONFLICT),
    );
  }
  return true;
};

exports.createUser = async ({ name, email, password, role }) => {
  if (await auth({ name, email })) {
    const md5pass = md5(password);
    await users.create({ name, email, password: md5pass, role });
    return { name, email, md5pass, role };
  }
};

exports.getAllUsers = async () => {
  const allUsers = await users.findAll();
  return allUsers;
};
