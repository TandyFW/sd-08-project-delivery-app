'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {
      saleId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'sales',
          key: 'id'
        },
        type: Sequelize.INTEGER,
        field: 'sale_id'
      },
      productId: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'products',
          key: 'id'
        },
        type: Sequelize.INTEGER,
        field: 'product_id'
      },
      quantity: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales_products');
  }
};
