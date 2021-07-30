'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('sales_products', {
      saleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'sales',
          key: 'id'
        },
        field: 'sale_id'
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'products',
          key: 'id'
        },
        field: 'product_id'
      },
      quantity: {
        type: Sequelize.INTEGER,
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('sales_products');
  }
};
