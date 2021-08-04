'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        field: 'user_id',
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model: 'users', key: 'id' }
      },
      sellerId: {
        allowNull: false,
        field: 'seller_id',
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model: 'users', key: 'id' }
      },
      totalPrice: {
        allowNull: false,
        field: 'total_price',
        type: Sequelize.DECIMAL(9, 2)
      },
      deliveryAddress: {
        allowNull: false,
        field: 'delivery_address',
        type: Sequelize.STRING(100)
      },
      deliveryNumber: {
        allowNull: false,
        field: 'delivery_number',
        type: Sequelize.STRING(50)
      },
      saleDate: {
        allowNull: false,
        field: 'sale_date',
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};
