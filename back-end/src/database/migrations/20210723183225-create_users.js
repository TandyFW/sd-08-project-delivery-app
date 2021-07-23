module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = queryInterface.createTable("users", {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      email:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      password:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      role:{
        allowNull: false,
        type: Sequelize.STRING,
      }
    })
    return users;
  },

  down: async (queryInterface, Sequelize) => {
      queryInterface.dropTable("users");
    }
 }

