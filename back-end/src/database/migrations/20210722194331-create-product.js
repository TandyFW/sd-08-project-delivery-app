'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const ProductsTable = queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(4, 2),
      },
      url_image: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: '',
      },
    });

    return ProductsTable;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('products');
  },
};
