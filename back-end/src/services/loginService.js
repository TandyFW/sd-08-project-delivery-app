const registerServices = require('./registerService');
const createToken = require('../auth/createToken');
const loginSchema = require('../schemas/loginSchema');
const clientError = require('../utils/clientError');

let dataLoginDB = null;

const login = async (dataForLogin) => {
  const { error } = loginSchema.login.validate(dataForLogin);
  console.log(dataForLogin);
  if (error) return clientError.badRequest(error.details[0].message);

  try {
  const { dataValues } = await registerServices.getByEmail(dataForLogin.email);
  dataLoginDB = dataValues;
  } catch (err) {
    return clientError.badRequest('User Not registered');
  }
  
  if (dataLoginDB.password !== dataForLogin.password) {
    return clientError.badRequest('Email Our Password Invalid');
  }
  
  const { name, email, id } = dataLoginDB;
   const token = await createToken({ name, email, id });
   return token;
};

module.exports = {
  login,
};
