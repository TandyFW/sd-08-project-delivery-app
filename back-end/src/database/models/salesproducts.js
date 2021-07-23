const SalesProducts = (sequelize, DataTypes) => {
  const User = sequelize.define("SalesProducts", {
   sale_id: {
     type: Sequelize.INTEGER,
     allowNull: false,
     primaryKey: true,
     references: {
       model: 'Sales',
       key: 'id',
     }
   },
   product_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'Products',
      key: 'id',
    }
   },
   quantity: {
     type: Sequelize.INTEGER,
     allowNull: false,
   },
  }, { tableName: 'sales_products', timestamps: false});

  SalesProducts.associate = (models) => {
    models.Sales.hasMany(model.Products, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id'
    })
  };
  SalesProducts.associate = (models) => {
    models.Products.hasMany(models.Sales, {
      as: 'sales',
      through: SalesProducts,
      foreignKey: 'product_id',
      otherKey: 'sales_id'
    })
  }

  return SalesProducts;
};

module.exports = SalesProducts;