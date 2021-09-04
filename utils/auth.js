const jwt = require('jsonwebtoken');

const getToken = username => jwt.sign({ username }, 'secret', {
    expiresIn: '1h'
});

module.exports = {
    getToken
};
