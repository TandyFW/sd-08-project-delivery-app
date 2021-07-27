const jwt = require('jsonwebtoken');
const usersModel = require('../models/usersModel');
const { code } = require('../helpers/messages');

const secret = 'seusecretdetoken';

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) throw new Error('missing auth token');
    const decoded = jwt.verify(token, secret);
    const user = await usersModel.findUserByEmail(decoded.email);
    if (!user) throw new Error('jwt malformed');
    req.body.userId = user._id;
    req.body.role = user.role;
    // console.log(req.body.role);
    next();
  } catch (error) {
    return res.status(code.UNAUTHORIZED).json({ message: error.message });
  }
};

module.exports = validateJWT;
