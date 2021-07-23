const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(9,2),
    delivery_address: DataTypes.STRING(100),
    delivery_number: DataTypes.STRING(50),
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING(50)
  },
  {
    timestamps: false,
    });

  sale.associate = (models) => {
    sale.hasOne(models.user, { as: 'userId', foreignKey: 'user_id' });
    sale.hasOne(models.user, { as: 'sellerId', foreignKey: 'seller_id' });
    sale.belongsTo(models.salesProduct);
  };

  return sale;
};
