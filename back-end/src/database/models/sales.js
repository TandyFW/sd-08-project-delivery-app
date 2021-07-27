const sale = (sequelize, DataTypes) => {
  const sale = sequelize.define("sales", {
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    salesDate: DataTypes.DATE,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    underscored: true,
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
