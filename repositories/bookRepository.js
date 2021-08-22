// const pool = require('../db');
const Book = require('../models').Book;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function BookRepository() {

  this.get = (search) => {
    const options = {
      where: {
        name: {
          [Op.iLike]: `%${search}%`
        }
      }
    };
    return Book.findAll(options);
  }

  this.getById = (id) => {
    return Book.findOne({ where: { id } });
  }

  this.save = (data) => {
    const book = new Book(data);
    return book.save();
  }

  this.delete = (id) => {
    return Book.destroy({ where: { id: id } });
  }
}


module.exports = new BookRepository();