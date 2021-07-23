const userService = require('../services/validUser');

const validUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userService.validUser(email);
    return res.status(200).json(user);
  } catch(e) {
    return res.status(404).json({
      message: e.message,
    });
  }
};

module.exports = { validUser };
