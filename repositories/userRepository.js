const User = require('../models').User;


class UserRepository {

    add(user) {
        return User.create(user);
    }

    async validate(username, password) {
        const user = await User.findOne({
            where: { username, password }
        });
        
        return !!user;
    }
}


module.exports = new UserRepository();