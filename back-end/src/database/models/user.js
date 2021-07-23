const User = (sequelize, DataTypes) => {
  const UserTable = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, { timestamps: false });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.Sale,
    { foreignKey: 'userId', as: 'sales' },
    { foreignKey: 'sellerId', as: 'sales' }
    );
};
  return UserTable;
};

module.exports = User;
