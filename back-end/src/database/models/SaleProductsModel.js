const SaleProducts = (sequelize, DataTypes) => {
  const saleProducts = sequelize.define('SaleProducts', {
    saleId: { type: DataTypes.INTEGER, foreignKey: true },
    productId: { type: DataTypes.INTEGER, foreignKey: true },
    quantity: DataTypes.INTEGER,
    
  },
  {
    timestamps: false,
  });
  
  saleProducts.associate = (models) => {
    saleProducts.belongsTo(models.Sale,
      {foreignKey: 'saleId', as: 'sale' });
    saleProducts.belongsTo(models.Product,
    {foreignKey: 'productId', as: 'product' });
  };

  return saleProducts;
};

module.exports = SaleProducts;