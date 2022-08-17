var DataTypes = require("sequelize").DataTypes;
var _book = require("./book.model");

function initModels(sequelize) {
  var book = _book(sequelize, DataTypes);


  return {
    book,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
