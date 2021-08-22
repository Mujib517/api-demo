// const pool = require('../db');
const Book = require('../models').Book;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function BookRepository() {

  const isSortFieldValid = (field) => {
    const sortFields = {
      name: true,
      price: true,
      id: true,
    };

    return sortFields[field.toLowerCase()];
  }

  const getSortDirection = (direction) => {
    direction = direction.toLowerCase();
    if (direction === 'asc') return direction;
    if (direction === 'desc') return direction;
    return 'asc';
  }

  this.get = ({ search, sort, direction }) => {
    const options = {
      where: {
        name: {
          [Op.iLike]: `%${search}%`
        }
      }
    };
    if (isSortFieldValid(sort)) options.order = [[sort.toLowerCase(), getSortDirection(direction)]];

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