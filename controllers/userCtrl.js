const userRepository = require("../repositories/userRepository");

const hasValidationErrors = (e) => e.errors && e.errors.length === 0;

const keyExists = (e) => e.original.detail.indexOf('already exists') > -1;

class UserCtrl {

    async register(req, res) {
        try {
            await userRepository.add(req.body);

            res.status(201).send();
        } catch (e) {
            if (hasValidationErrors(e)) res.status(500).send(e.errors);
            else if (keyExists(e)) res.status(400).send("User already exists");
            else res.status(500).send("Internal Server Error");
        }
    }
}

module.exports = new UserCtrl();