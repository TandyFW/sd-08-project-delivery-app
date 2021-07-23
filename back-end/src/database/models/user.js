module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.VARCHAR(255),
    email: DataTypes.VARCHAR(255),
    password: DataTypes.VARCHAR(255),
    role: DataTypes.VARCHAR(255),
  },
  {
    timestamps: false,
    tableName: 'users',
  });
  return user;
}
