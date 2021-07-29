"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("sales", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      totalPrice: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        field: "total_price",
      },
      deliveryAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "delivery_address",
      },
      deliveryNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        field: "delivery_number",
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "sale_date",
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        field: "user_id",
        references: {
          model: "users",
          key: "id",
        },
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        field: "seller_id",
        references: {
          model: "users",
          key: "id",
        },
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("sales");
  },
};
