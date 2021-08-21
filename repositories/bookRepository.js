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
    }

    return pool.query(query);
  }
}


module.exports = new BookRepository();