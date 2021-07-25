const userServices = require('./userService');
const createToken = require('../auth/createToken');
const loginSchema = require('../schemas/loginSchema');
const clientError = require('../utils/clientError');

let dataUserDB = null;

const login = async (dataForLogin) => {
  const { error } = loginSchema.login.validate(dataForLogin);
  if (error) return clientError.badRequest(error.details[0].message);

  try {
  const { dataValues } = await userServices.getByEmail(dataForLogin.email);
  dataUserDB = dataValues;
  } catch (err) {
    return clientError.badRequest('User Not Registered');
  }
  
  if (dataUserDB.password !== dataForLogin.password) {
    return clientError.badRequest('Email Our Password Invalid');
  }
  
  const { name, email, id } = dataUserDB;
   const token = await createToken({ name, email, id });
   return token;
};

module.exports = {
  login,
};
