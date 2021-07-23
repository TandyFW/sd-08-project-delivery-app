module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      saleId: {
        type: Sequelize.INTEGER,
        field: 'saleId',
        references: {
          model: 'sales',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      productId: {
        type: Sequelize.INTEGER,
        field: 'productId',
        references: {
          model: 'products',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  },
};
