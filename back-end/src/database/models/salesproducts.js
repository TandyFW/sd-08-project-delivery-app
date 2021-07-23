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

  return SalesProducts;
};

module.exports = SalesProducts;