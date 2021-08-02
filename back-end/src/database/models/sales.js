const sale = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    timestamps: true,
    createdAt: 'sale_date',
    updatedAt: false,
  });

  sales.associate = (models) => {
    sales.belongsTo(models.users,
      { foreignKey: 'user_id', as: 'user' });
    sales.belongsTo(models.users,
      { foreignKey: 'seller_id', as: 'seller' });
  };

  return sales;
};

module.exports = sale;
