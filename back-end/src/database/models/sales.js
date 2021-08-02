const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define("Sales", {
  total_price: DataTypes.DECIMAL,
  delivery_address: DataTypes.STRING,
  delivery_number: DataTypes.STRING,
  status: DataTypes.STRING,
  sale_date: DataTypes.DATE,
},
{
  tableName: 'sales',
  timestamps: false,
  underscored: true,
});

Sales.associate = (models) => {
  Sales.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  Sales.belongsTo(models.User, { foreignKey: 'seller_id', as: 'seller' });
}

  return Sales;
};

module.exports = Sales;