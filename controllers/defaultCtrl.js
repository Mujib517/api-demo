function home(req, res) {
  // res.status(200);
  // res.send("Hello Express");

  res
    .status(200)
    .send("Hello Express");
}

module.exports = home;
