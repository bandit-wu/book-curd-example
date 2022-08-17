const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('book', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "书籍id"
    },
    isbn: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "isbn编号"
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "书名"
    },
    author: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "作者"
    },
    print: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "出版社"
    },
    publish_time: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "出版日期"
    },
    intro: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "简介"
    },
    remark: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "备注"
    }
  }, {
    sequelize,
    tableName: 'book',
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
