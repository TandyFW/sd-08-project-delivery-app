const { userService, createUser, getUsers } = require('../services/validUser');
const { CREATED, BAD_REQUEST } = require('../services/statusCode');

// const validUser = async (req, res) => {
//   try {
//     const { email } = req.body;
//     const user = await userService.validUser(email);
//     return res.status(200).json(user);
//   } catch(e) {
//     return res.status(404).json({
//       message: e.message,
//     });
//   }
// };

// const addUser = async (req, res) => {
//   const newUser = await createUser(req.body);
//   if (newUser.error) return res.status(BAD_REQUEST).json({ message: newUser.error.message });
//   return res.status(CREATED).json({ user: newUser, response: true });
// };

// const getAllUsers = async (_req, res) => {
//   const users = await getUsers();
//   res.status(CREATED).json(users);
// };

// module.exports = {
//   validUser,
//   addUser,
//   getAllUsers,
// };
