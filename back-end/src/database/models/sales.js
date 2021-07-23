const sale = (sequelize, DataTypes) => {
  const sale = sequelize.define("sale", {
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sales_date: DataTypes.DATE,
    status: DataTypes.STRING
  },
  {
    timestamps: false
  });

  sale.associate = (models) => {
    sale.belongTo(models.user,
      { foreignKey: 'user_id', as: 'user' });
    sale.belongTo(models.user,
      { foreignKey: 'seller_id', as: 'user' })
  };

  return sale;
}

module.exports = sale;