module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sales',
        key: 'id'
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'products',
        key: 'id'
      },
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, { tableName: 'sales_products' });

  return SalesProducts;
};
