const User = require('../models').User;


class UserRepository {

    add(user) {
        return User.create(user);
    }

    async getUser(username, password) {
        const user = await User.findOne({
            where: { username }
        });

        return user;
    }
}


module.exports = new UserRepository();