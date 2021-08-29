const userRepository = require("../repositories/userRepository");

class UserCtrl {

    async post(req, res) {
        try {
            await userRepository.add(req.body);

            res.status(201).send();
        } catch (e) {
            if (this.hasValidationErrors(e)) res.status(500).send(e.errors);
            else res.status(500).send("Internal Server Error");
        }
    }
}

module.exports = new UserCtrl();