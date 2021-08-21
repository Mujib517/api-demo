// const pg = require('pg');
// const { Pool } = pg;  // const Pool = pg.Pool
const { Pool } = require('pg');

const pool = new Pool({
  host: '127.0.0.1',
  user: 'postgres',
  password: 'postgres'
});


module.exports = pool;