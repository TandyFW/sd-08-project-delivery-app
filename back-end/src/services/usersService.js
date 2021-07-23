const userSchema = require('../schemas/usersSchema');
const { user } = require('../database/models');

const createUsers = async (dataForCreate) => {
  const { error } = userSchema.createUser.validate(dataForCreate);
  if (error) {
   return { 
     error: true,
     statusCode: 600,
     message: error.details[0].message,
   };
  }
  await user.create(dataForCreate);
  // console.log(result);
};

// const getAllUsers = async () => {
//   const users = await user.findAll();
//   return users;
// };

// getAllUsers().then(console.log);

module.exports = {
  createUsers,
};