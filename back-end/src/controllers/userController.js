const userService = require('../services/userService');
const { status } = require('../middlewares/status');

const register = async (req, res) => {
try {
const { name, email, password, role = 'customer' } = req.body;
const newUser = await userService.registerUser({ name, email, password, role });
return res.status(status.Created).json({ newUser });
} catch (error) {
return res.status(status.Conflict).json({ message: error.message });
}
};

const getSellers = async (_req, res) => {
try {
const sellers = await userService.findSellers();
return res.status(status.OK).json(sellers);
} catch (error) {
return res.status(status.NotFound).json({ message: 'Error' });
}
};

module.exports = { register, getSellers };
