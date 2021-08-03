const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define("SalesProducts", {
  //  saleId: {
  //    type: DataTypes.INTEGER,
  //    allowNull: false,
  //    primaryKey: true,
  //    references: {
  //      model: 'sales',
  //      key: 'id',
  //    }
  //  },
  //  productId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   primaryKey: true,
  //   references: {
  //     model: 'products',
  //     key: 'id',
  //   }
  //  },
   quantity: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
  }, { underscored: true, tableName: 'salesProducts', timestamps: false});

  SalesProducts.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId'
    })
  };
  SalesProducts.associate = (models) => {
    models.Products.belongsToMany(models.Sales, {
      as: 'sales',
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId'
    })
  }

  return SalesProducts;
};

module.exports = SalesProducts;