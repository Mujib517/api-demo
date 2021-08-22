const pool = require('../db');

function BookRepository() {

  // this.get = function (cb) {
  //   pool.query('SELECT * FROM books', function (err, data) {
  //     if (err) {
  //       logger.log({ level: 'error', message: err });
  //       cb(err);
  //     } else {
  //       logger.info({ level: 'info', message: data.rows });
  //       cb(null, data.rows);
  //     }
  //   });
  // }

  this.get = () => {
    return pool.query('SELECT id,name,price FROM books');
  }

  this.getById = (id) => {
    const query = {
      text: 'SELECT id,name,price FROM books where id=$1',
      values: [id],
    };

    return pool.query(query);
  }

  this.save = (book) => {
    const query = {
      text: 'INSERT INTO books(name,price) VALUES ($1,$2)',
      values: [book.name, book.price],
    };

    return pool.query(query);
  }

  this.delete = (id) => {
    const query = {
      text: 'DELETE FROM books WHERE id=$1',
      values: [id],
    };

    return pool.query(query);
  }

  this.update = (id, book) => {
    const query = {
      text: 'UPDATE books SET name=$2,price=$3 WHERE id=$1',
      values: [id, book.name, book.price],
    };
    return pool.query(query);
  }

}


module.exports = new BookRepository();