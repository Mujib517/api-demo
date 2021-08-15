// server
// a module
// a server
// tomcat 
// self contained
// spring boot
// timers,db calls, web calls,
// callback
// routing
// v8
// express framework
function handler(req, res) {

  const books = [
    { id: 1, name: "Clean Code", price: 200 },
    { id: 2, name: "Clean Coder", price: 100 },
    { id: 3, name: "Clean Architecture", price: 300 }
  ];

  switch (req.url) {
    case '/':
      res.write("Hello NodeJS Server");
      res.end();
      break;
    case '/books':
      res.write(JSON.stringify(books));
      res.end();
      break;
    case '/products':
      res.write("Products");
      res.end();

    default:
      res.write("Invalid request");
      res.end();
  }
}

const http = require('http');

const server = http.createServer(handler);

server.listen(3000, function () {
  console.log("server is running on 3000");
});

