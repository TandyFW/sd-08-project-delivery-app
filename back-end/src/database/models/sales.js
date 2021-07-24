const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define("Sales", {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    references: {
      model: 'User',
      key: 'id'
    }
  },
  seller_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    references: {
      model: 'User',
      key: 'id'
    }
  },
  delivery_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  delivery_number : {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sale_data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, { tableName: 'sales'});

Sales.associate = (models) => {
  Sales.belongsTo(models.User, { foreignKey: 'user_id', foreignKey: 'seller_id', as: 'user' });
}

  return Sales;
};

module.exports = Sales;