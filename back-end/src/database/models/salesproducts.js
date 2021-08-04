const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define("SalesProducts", {
   quantity: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
  }, { underscored: true, tableName: 'salesProducts', timestamps: false});
  return SalesProducts;
};

module.exports = SalesProducts;