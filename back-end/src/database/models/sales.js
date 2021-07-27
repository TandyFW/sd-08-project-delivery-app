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
    underscored: true,
    setterMethods: {
      userId: function (v) { this.setDataValue("user_id", v); },
      sellerId: function (v) { this.setDataValue("seller_id", v); },
      totalPrice: function (v) { this.setDataValue("total_price", v); },
      deliveryAddress: function (v) { this.setDataValue("delivery_address", v); },
      deliveryNumber: function (v) { this.setDataValue("delivery_number", v); },
      saleDate: function (v) { this.setDataValue("sale_date", v); }
    }
  });

  sale.associate = (models) => {
    sale.belongsTo(models.user, { foreignKey: 'user_id' });
    sale.belongsTo(models.user, { foreignKey: 'seller_id' });
    sale.belongsToMany(models.product, { through: models.salesProduct });
    sale.hasMany(models.salesProduct);
  };

  return sale;
};
