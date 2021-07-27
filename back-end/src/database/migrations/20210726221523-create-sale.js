"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("sales", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        primaryKey: true,
        field: "user_id",
      },
      sellerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        primaryKey: true,
        field: "seller_id",
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
        field: "total_price",
      },
      deliveryAddress: {
        allowNull: false,
        type: Sequelize.STRING(100),
        field: "delivery_address",
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.STRING(100),
        field: "delivery_number",
      },
      salesDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "sales_date",
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("sales");
  },
};
