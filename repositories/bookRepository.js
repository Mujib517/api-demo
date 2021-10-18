// const pool = require('../db');
const Book = require('../models').Book;
const Review = require('../models').Review;
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

  this.get = ({ search, sort, direction, pageIndex, limit }) => {
    const offset = pageIndex * limit;
    const options = {
      offset,
      limit,
      where: {
        name: {
          [Op.iLike]: `%${search}%`
        }
      }
    };
    if (isSortFieldValid(sort)) options.order = [[sort.toLowerCase(), getSortDirection(direction)]];

    return Book.findAll(options);
  }

  // this.get = ({ search, sort, direction, offset, limit }) => {
  //   const options = {
  //     offset,
  //     limit,
  //     where: {
  //       name: {
  //         [Op.iLike]: `%${search}%`
  //       }
  //     }
  //   };
  //   if (isSortFieldValid(sort)) options.order = [[sort.toLowerCase(), getSortDirection(direction)]];

  //   return Book.findAll(options);
  // }

  this.getById = (id) => {
    const options = {
      attributes: ['id', 'name', 'price'],
      where: { id },
      include: [{ attributes: ['subject', 'message', 'rating'], model: Review }]
    };
    return Book.findOne(options);
  }

  this.save = (data) => {
    const book = new Book(data);
    return book.save();
  }

  this.delete = (id) => {
    return Book.destroy({ where: { id: id } });
  }

  this.count = (opts) => {
    const options = {
      where: {
        name: {
          [Op.iLike]: `%${opts.search}%`
        }
      }
    };

    return Book.count(options);
  }
}

module.exports = new BookRepository();