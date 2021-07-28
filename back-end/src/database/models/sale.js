const sale = (sequelize, DataTypes) => {
  const sale = sequelize.define("sale", {
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(100),
    salesDate: DataTypes.DATE,
    status: DataTypes.STRING(100),
  }, { timestamps : false });

  sale.associate = (models) => {
    sale.belongsTo(models.user, { 
      as: "sellerId" ,
      foreignKey: 'seller_id',
      }
      );
   sale.belongsTo(models.user, {
      as: "userId",
      foreignKey: 'user_id',
    });
  };
  return sale;
};

module.exports = sale;
