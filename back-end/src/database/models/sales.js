const User = (sequelize, DataTypes) => {
  const Sales = sequelize.define("Sales", {
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    references: {
      model: 'User',
      key: 'id'
    }
  },
  seller_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    references: {
      model: 'User',
      key: 'id'
    }
  },
  delivery_address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  delivery_number : {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  sale_data: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, { tableName: 'sales'});

Sales.associate = (models) => {
  Sales.belongsTo(model.User, { foreignKey: 'user_id', foreignKey: seller_id, as: 'user' });
}

  return Sales;
};

module.exports = Sales;