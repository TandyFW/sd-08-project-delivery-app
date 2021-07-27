const { userLogin, createUser, getUsers, generateToken } = require('../services/userService');
const { CREATED, BAD_REQUEST, OK } = require('../services/statusCode');

const validUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userLogin(email);
    // const token = generateToken(user);
    return res.status(200).json(user);
  } catch (e) {
    return res.status(404).json({
      message: e.message,
    });
  }
};

const addUser = async (req, res) => {
  const newUser = await createUser(req.body);
  if (newUser.message) return res.status(BAD_REQUEST).json({ message: newUser.error.message });
  return res.status(CREATED).json(newUser);
};

const getAllUsers = async (_req, res) => {
  const users = await getUsers();
  res.status(OK).json(users);
};

module.exports = {
  validUser,
  addUser,
  getAllUsers,
};
