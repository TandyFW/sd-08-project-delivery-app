const saleProduct = (sequelize, DataTypes) => {
  const SaleProductTable = sequelize.define('saleProduct', {
    quantity: DataTypes.STRING,
  }, { 
    timestamps: false,
      underscored: true,
      // para indicar que as referências de campos e tabelas são em snake_case 
      tableName: 'saleProducts', 
      // para que o sequelize não busque por uma tabela 'minha_tabela'
    });

  SaleProductTable.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      onDelete: 'CASCADE',
      as: 'products',
      through: SaleProductTable,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });

    models.product.belongsToMany(models.sale, {
      onDelete: 'CASCADE',
      as: 'sales',
      through: SaleProductTable,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return SaleProductTable;
};

module.exports = saleProduct;
