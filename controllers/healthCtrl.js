function health(req, res) {
  res.status(200);
  res.json({ status: 'Up' });
}

module.exports = health;


