const {
  userLogin,
  createUser,
  getUsers,
  getSellers } = require('../services/userService');
const { CREATED, BAD_REQUEST, OK, INTERNAL_SERVER_ERROR } = require('../services/statusCode');

const validUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { name, role } = await userLogin(email, password);
    console.log(req.body);
    return res.status(200).json({ name, email, role, token: req.token });
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

const getAllSellers = async (_req, res) => {
  const sellers = await getSellers();
  if (sellers) return res.status(OK).json(sellers);
  return res.status(INTERNAL_SERVER_ERROR).json({ message: 'Error' });
};

module.exports = {
  validUser,
  addUser,
  getAllUsers,
  getAllSellers,
};
