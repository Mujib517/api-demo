const logger = require('../utils/logger');
const bookRepository = require('../repositories/bookRepository');

const books = [
  { id: 1, name: "Clean Code", price: 200 },
  { id: 2, name: "Clean Coder", price: 100 },
  { id: 3, name: "Clean Architecture", price: 300 }
];

class BooksCtrl {
  async get(req, res) {
    // asynchronous code
    // bookRepository.get((err, data) => {
    //   if (err) {
    //     res.send("failed");
    //   } else {
    //     res.status(200);
    //     res.send(data);
    //   }
    // });

    // bookRepository.get()
    //   .then(function (data) {
    //     res.status(200);
    //     res.json(data.rows);
    //   })
    //   .catch(function (err) {
    //     logger.error(err);
    //     res.status(500);
    //     res.send("error");
    //   });

    try {
      const data = await bookRepository.get();
      res.status(200);
      res.json(data.rows);
    } catch (err) {
      logger.error(err);
      res.status(500);
      res.send("error");
    }
  }

  async getById(req, res) {
    const data = await bookRepository.getById(+req.params.id);
    if (data.rows.length) {
      res.status(200);
      res.json(data.rows[0]);
    } else {
      res.status(404);
      res.send("Not found");
    }
  }

  post(req, res) {

    const bookExists = books.find(book => book.id == req.body.id);
    if (bookExists) {
      res.status(400);
      res.send("Already exists");
    }

    else {
      books.push(req.body);

      res.status(201);
      res.json();
    }
  }

  remove(req, res) {
    const id = +req.params.id;

    for (let i = 0; i < books.length; i++) {
      if (books[i].id === id) {
        books.splice(i, 1);
      }
    }

    res.status(204); // no content
    res.send();
  }

  update(req, res) {
    const id = +req.params.id;

    const book = books.find(book => book.id === id);
    if (book) {
      book.name = req.body.name;
      book.price = req.body.price;
      res.status(204);
      res.send();
    } else {
      res.status(404);
      res.send("Not found");
    }
  }

  patch(req, res) {
    const id = +req.params.id;
    const book = books.find(book => book.id === id);

    for (let key in req.body) {
      book[key] = req.body[key];
    }

    res.status(204);
    res.send();
  }
}

// singleton
module.exports = new BooksCtrl();