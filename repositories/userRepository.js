const User = require('../models').User;


class UserRepository {

    add(user) {
        return User.create(user);
    }
}


module.exports = new UserRepository();