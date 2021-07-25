const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING(100),
    email: DataTypes.STRING(50),
    password: DataTypes.STRING(30),
    role: DataTypes.STRING(30),
  },{
    timestamps: false
  }
);
  return User;
}

module.exports = User;
