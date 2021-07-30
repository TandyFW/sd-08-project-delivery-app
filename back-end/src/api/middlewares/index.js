const loginUserValidation = require('./loginUserValidation');
const emailPasswordDataValidation = require('./emailPasswordDataValidation');
const tokenGeneration = require('./tokenGeneration');
const userNameDataValidation = require('./userNameDataValidation');
const registerUserValidation = require('./registerUserValidation');
const tokenValidation = require('./tokenValidation');
const orderInfoHandler = require('./orderInfoHandler');

module.exports = {
  loginUserValidation,
  emailPasswordDataValidation,
  tokenGeneration,
  userNameDataValidation,
  registerUserValidation,
  tokenValidation,
  orderInfoHandler,
};