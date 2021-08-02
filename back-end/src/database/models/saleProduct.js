const SaleProduct = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('SaleProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sale_id',
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_id',
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'sales_products',
    underscored: true,
  });

  // saleProduct.associate = (models) => {
  //   saleProduct.belongsTo(models.Sale, {
  //     as: 'vendas',
  //     through: saleProduct,
  //     foreignKey: 'sale_id',
  //     otherKey: 'product_id',
  //   });
  // };
  
  return saleProduct;
};

module.exports = SaleProduct;
