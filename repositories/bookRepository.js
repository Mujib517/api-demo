const pool = require('../db');
const logger = require('../utils/logger');

function BookRepository() {

  this.get = function (cb) {
    pool.query('SELECT * FROM books 1', function (err, data) {
      if (err) {
        logger.log({ level: 'error', message: err });
        cb(err);
      } else {
        logger.info({ level: 'info', message: data.rows });
        cb(null, data.rows);
      }
    });
  }
}


module.exports = new BookRepository();