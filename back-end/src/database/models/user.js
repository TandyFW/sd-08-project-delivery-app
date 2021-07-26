const user = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING(100),
    email: DataTypes.STRING(50),
    password: DataTypes.STRING(30),
    role: DataTypes.STRING(30),
  },{
    timestamps: false
  }
);
  return user;
}

module.exports = user;
