const saleProduct = (sequelize, DataTypes) => {
  const SaleProductTable = sequelize.define('saleProduct', {
    quantity: DataTypes.STRING,
  }, { 
    timestamps: false,
      underscored: true,
      // para indicar que as referências de campos e tabelas são em snake_case 
      tableName: 'salesProducts', 
      // para que o sequelize não busque por uma tabela 'minha_tabela'
    });

  SaleProductTable.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      onDelete: 'CASCADE',
      as: 'products',
      through: SaleProductTable,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });

    models.product.belongsToMany(models.sale, {
      onDelete: 'CASCADE',
      as: 'sales',
      through: SaleProductTable,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };

  return SaleProductTable;
};

module.exports = saleProduct;
