const SaleProduct = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('SaleProduct', {
   
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'salesProducts',
    underscored: true,
  });

  saleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: saleProduct,
      primaryKey: 'product_id',
      otherKey: 'sale_id',
    });
  };
  
  return saleProduct;
};

module.exports = SaleProduct;
