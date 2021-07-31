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
  });

  saleProduct.associate = (models) => {
    saleProduct.belongsTo(models.Sale,
      { foreignKey: 'saleId', as: 'sale', allowNull: false });
    saleProduct.belongsTo(models.Product,
      { foreignKey: 'productId', as: 'product', allowNull: false });    
  };

  return saleProduct;
};

module.exports = SaleProduct;
