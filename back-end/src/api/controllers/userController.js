const {
  userLogin,
  createUser,
  getUsers,
  generateToken,
  deleteUser,
} = require('../services/userService');
const { CREATED, BAD_REQUEST, OK } = require('../services/statusCode');

const validUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userLogin(email, password);
    const userToken = {
      email: user.email,
      name: user.name,
      role: user.role,
    };
    console.log(userToken);
    const token = generateToken(userToken);
    console.log(token);
    return res.status(200).json({ user, token });
  } catch (e) {
    return res.status(404).json({
      message: e.message,
    });
  }
};

const addUser = async (req, res) => {
  const newUser = await createUser(req.body);
  if (newUser.message) {
    return res.status(BAD_REQUEST).json({ message: newUser.error.message });
  }
  return res.status(CREATED).json(newUser);
};
const addUserByAdmin = async (req, res) => {
  const newUser = await createUser(req.body);
  return res.status(CREATED).json(newUser);
};

const getAllUsers = async (_req, res) => {
  const users = await getUsers();
  res.status(OK).json(users);
};
const removeUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userRemoved = await deleteUser(id);
    return res.status(200).json({ message: 'Usuário excluído com sucesso!', userRemoved });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Erro ao deletar usuário!' });
  }
};

module.exports = {
  validUser,
  addUser,
  getAllUsers,
  addUserByAdmin,
  removeUser,
};
