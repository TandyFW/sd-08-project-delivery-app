const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define("SalesProducts", {
   sale_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey: true,
     references: {
       model: 'Sales',
       key: 'id',
     }
   },
   product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'Products',
      key: 'id',
    }
   },
   quantity: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
  }, { underscored: true, tableName: 'salesProducts', timestamps: false});

  SalesProducts.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id'
    })
  };
  SalesProducts.associate = (models) => {
    models.Products.belongsToMany(models.Sales, {
      as: 'sales',
      through: SalesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id'
    })
  }

  return SalesProducts;
};

module.exports = SalesProducts;