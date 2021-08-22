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
      const search = req.query.search;
      const data = await bookRepository.get(search);
      res.status(200);
      res.json(data);
    } catch (err) {
      logger.error(err);
      res.status(500);
      res.send("error");
    }
  }

  async getById(req, res) {
    const data = await bookRepository.getById(+req.params.id);
    if (data) {
      res.status(200);
      res.json(data);
    } else {
      res.status(404);
      res.send("not found");
    }
    // if (data.rows.length) {
    //   res.status(200);
    //   res.json(data.rows[0]);
    // } else {
    //   res.status(404);
    //   res.send("Not found");
    // }
  }

  async post(req, res) {
    try {
      await bookRepository.save(req.body);
      res.status(201);
      res.send();
    } catch (e) {
      console.log(e);
      res.status(500);
      res.send("Internal Server Error");
    }
  }

  async remove(req, res) {
    const id = +req.params.id;
    await bookRepository.delete(id);

    res.status(204); // no content
    res.send();
  }

  async update(req, res) {
    const id = +req.params.id;

    await bookRepository.update(id, req.body);

    res.status(204);
    res.send();
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