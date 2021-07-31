const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define("Sales", {
  total_price: DataTypes.DECIMAL,
  delivery_address: DataTypes.STRING,
  delivery_number: DataTypes.INTEGER,
  status: DataTypes.STRING,
},
{
  tableName: 'sales',
  timestamps: { createdAt: true, updatedAt: false },
  createdAt: 'sale_date',
});

Sales.associate = (models) => {
  Sales.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  Sales.belongsTo(models.User, { foreignKey: 'seller_id', as: 'seller' });
}

  return Sales;
};

module.exports = Sales;