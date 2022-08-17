const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "用户id"
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "用户吗"
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "密码"
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "邮箱"
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
