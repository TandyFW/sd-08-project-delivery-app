const userService = require('../services/userService');

const httpStatusCodeSucess = 200;
const httpStatusCodeNotFound = 404;


const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const loginUser = await userService.loginUser({ email, password });
		return res.status(httpStatusCodeSucess).json({ loginUser });
	} catch (error) {
		return res.status(httpStatusCodeNotFound).json({ message: error.message });
	}
};

module.exports = {
  login,
};