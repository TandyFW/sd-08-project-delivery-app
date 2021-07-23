module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sales_products = queryInterface.createTable("sales_products", {
      sale_id:{
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      product_id:{
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quantity:{
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    })
    return sales_products;
  },

  down: async (queryInterface, Sequelize) => {
    down: async (queryInterface, Sequelize) => {
      queryInterface.dropTable("sales_products");
    }
  }
};
