const books = [
  { id: 1, name: "Clean Code", price: 200 },
  { id: 2, name: "Clean Coder", price: 100 },
  { id: 3, name: "Clean Architecture", price: 300 }
];

function get(req, res) {
  res.status(200);
  res.json(books);
}

function getById(req, res) {
  // const id = parseInt(req.params.id);
  const id = +req.params.id;
  const result = books.find(book => book.id === id);
  // let result;
  // for (let i = 0; i < books.length; i++) {
  //   if (id == books[i].id) result = books[i];
  // }

  if (!result) {
    res.status(404);
    res.send("not found");
  }
  else {
    res.status(200);
    res.json(result);
  }
}

function post(req, res) {

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

function remove(req, res) {
  const id = +req.params.id;

  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      books.splice(i, 1);
    }
  }

  res.status(204); // no content
  res.send();
}

function update(req, res) {
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
  // for (let i = 0; i < books.length; i++) {
  //   if (books[i].id === id) {
  //     books[i].name = req.body.name;
  //     books[i].price = req.body.price;
  //   }
  // }
}

function patch(req, res) {
  const id = +req.params.id;
  const book = books.find(book => book.id === id);

  for (let key in req.body) {
    book[key] = req.body[key];
  }

  res.status(204);
  res.send();
}

// module.exports = {
//   getAll: get,
//   getById: getById,
//   post: post,
//   remove: remove
// };

module.exports = {
  get,
  getById,
  post,
  remove,
  update,
  patch
}