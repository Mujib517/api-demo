'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      // define association here
    }
  };
  Book.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    price: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};