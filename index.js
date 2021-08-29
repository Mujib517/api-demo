// module patterns
// commonjs (require)
// ES6 module (import, export)
// middleware
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const booksRouter = require('./routes/bookRouter');
const defaultRouter = require('./routes/defaultRouter');
const reviewRouter = require('./routes/reviewRouter');
const userRouter = require('./routes/userRouter');
const { basicAuth } = require('./utils/middlewares');
const app = express();



app.listen(3000, function () {
  console.log("Server is running on 3000");
});

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs', 'requests.log'), { flags: 'a' })
const removePoweredByHeader = (req, res, next) => {
  res.setHeader('X-Powered-By', '');
  next();
}

app.use(morgan('combined', { stream: accessLogStream }));

// middlewares
app.use(removePoweredByHeader);
app.use(bodyParser.json());
// non blocking event driven server

// monitoring
// polling
// routes

app.use('/', defaultRouter); // home and health endpoints
app.use('/api/users', userRouter);

// app.use(basicAuth);

app.use('/api/books', booksRouter);
app.use('/api/reviews', reviewRouter);


// GET, POST, PUT, DELETE
// URL: www.google.com/api/books
// body:{
  // username: mujib, password:
//}
// req headers: accept:application/xml, content-type: application/json, authorization: 'token'
// res headers: accept: application/xml, content-type:application/xml, x-my-header:'abc'
// status:
//  1xx : information 101
//  2xx : success, 200, 201, 204
//  3xx:  304 redirects
//  4xx:  client errors (404,401, 400)
//  5xx:  server errors (501, 503)