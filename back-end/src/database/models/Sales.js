const Sales = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    total_price: {
      type: DataTypes.DECIMAL,
      notNull: true,
    },
    delivery_address: {
      type: DataTypes.STRING,
      notNull: true,
    },
    delivery_number: {
      type: DataTypes.STRING,
      notNull: true,
    },
    sale_date: {
      type: DataTypes.DATETIME,
      notNull: true,
    },
    status: {
      type: DataTypes.STRING,
      notNull: true,
    },
  },
  {
    underscore: false,
    timestamp: false,
  });

  sales.associate = (models) => {
    sales.belongsTo(models.users,
      { foreignKey: 'user_id', as: 'users' });
    sales.belongsTo(models.users,
      { foreignKey: 'seller_id', as: 'users' });
  };

  return sales;
};

module.export = Sales;
