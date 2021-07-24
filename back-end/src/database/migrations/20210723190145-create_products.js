module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = queryInterface.createTable("products", {
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
      price:{
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      url_image:{
        allowNull: false,
        type: Sequelize.STRING,
      },
    })
    return products;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("products");
  }
};
