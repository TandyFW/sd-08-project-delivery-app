const sale = (sequelize, DataTypes) => {
  const sale = sequelize.define("sale", {
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(100),
    salesDate: DataTypes.DATE,
    status: DataTypes.STRING(100),
  }, { timestamps : false });

  sale.associate = (models) => {
    models.sale.belongsTo(models.user, { 
      as: "seller_id" ,
      }
      );
    models.sale.belongsTo(models.user, {
      as: "user_id",
    });
  };

  return sale;
};

module.exports = sale;

// as: 'users',
// through: UserBook,
// foreignKey: 'book_id',
// otherKey: 'user_id', 