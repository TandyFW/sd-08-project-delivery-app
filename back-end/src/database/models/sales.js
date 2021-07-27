const sale = (sequelize, DataTypes) => {
  const sale = sequelize.define("sales", {
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sales_date: DataTypes.DATE,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
  },
  {
    timestamps: false
  });

  sale.associate = (models) => {
    sale.belongsTo(models.users,
      { foreignKey: 'userId', as: 'user' });
    sale.belongsTo(models.users,
      { foreignKey: 'sellerId', as: 'user_seller' })
    // sale.hasMany(models.salesproducts)
  };

  return sale;
}

module.exports = sale;
