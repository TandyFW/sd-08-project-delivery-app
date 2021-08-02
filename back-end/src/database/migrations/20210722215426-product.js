'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: { 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      price: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: false,
      },
      urlImage: { 
        type: Sequelize.STRING(200),
        allowNull: false,
        field: 'url_image',
        defaultValue: '',
      }
    },{
      timestamps: false,
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('products');
  }
};
