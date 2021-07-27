const SERVICES = require("../services/users")

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const results = await SERVICES.login(email, password)
    if (results.error) return res.status(results.error).json({ message: results.message })
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await SERVICES.register(name, email, password)
    if (result.error) return res.status(result.error).json({ message: result.message })
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

const getAllUsers = async (req, res) => {
  const response = await SERVICES.getAllUsers();
  res.status(200).json({ response });
};

const getAllSellers = async (req, res) => {
  const response = await SERVICES.getAllSellers();
  res.status(200).json({ response });
};

module.exports = {
  login, register, getAllUsers, getAllSellers
}