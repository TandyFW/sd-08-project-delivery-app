const userService = require('../services/userService');
const { status } = require('../middlewares/status');
const { createToken } = require('../auth/jwt');

const rolePath = {
  customer: '/customer/products',
  administrator: '/admin/manage',
  seller: '/seller/orders',
};

const login = async (req, res) => {
try {
const { email, password } = req.body;
const loginUser = await userService.loginUser({ email, password });
console.log('user', loginUser.toJSON());
const { id, password: pass, ...infos } = loginUser.toJSON();
const token = createToken(infos);
console.log('Test', rolePath[infos.role]);
const redirectPath = rolePath[infos.role];
return res.status(status.OK).json({ ...infos, token, redirectPath });
} catch (error) {
return res.status(status.NotFound).json({ message: error.message });
}
};

module.exports = {
  login,
};
