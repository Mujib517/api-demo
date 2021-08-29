'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {

    static associate(models) {
      Book.hasMany(models.Review, {
        foreignKey: 'bookId'
      });
    }
  };
  
  Book.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    price: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};