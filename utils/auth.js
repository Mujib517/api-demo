const jwt = require('jsonwebtoken');

const key = 'secret';

const getToken = username => jwt.sign({ username }, key, {
    expiresIn: '1h'
});

const verifyToken = token => jwt.verify(token, key);

module.exports = {
    getToken,
    verifyToken
};
