const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const key = 'secret';

const getToken = username => jwt.sign({ username }, key, {
    expiresIn: '1h'
});

const verifyToken = token => jwt.verify(token, key);

const hashPwd = pwd => bcrypt.hash(pwd, 2);

const verifyPwd = (pwd, hashedPwd) => bcrypt.compare(pwd, hashedPwd);

module.exports = {
    getToken,
    verifyToken,
    hashPwd,
    verifyPwd
};
