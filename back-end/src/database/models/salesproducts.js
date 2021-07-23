const SalesProducts = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts',
    {
      quantity: {
        type: DataTypes.INTEGER,
        notNull: true,
      },
    },
    { timestamps: false },
  );

  salesProducts.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
      as: 'products',
      through: salesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.Products.belongsToMany(models.Sales, {
      as: 'sales',
      through: salesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return salesProducts;
};

module.exports = SalesProducts;
