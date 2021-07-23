module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  },
  {
    timestamps: false,
    });

  sale.associate = (models) => {
    sale.belongsTo(models.user, { as: 'userId', foreignKey: 'user_id' });
    sale.belongsTo(models.user, { as: 'sellerId', foreignKey: 'seller_id' });
    sale.hasOne(models.sales_product);
  };

  return sale;
};
