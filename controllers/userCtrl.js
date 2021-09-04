const userService = require("../services/userService");

const hasValidationErrors = (e) => e.errors && e.errors.length === 0;

const keyExists = (e) => e.original && e.original.detail.indexOf('already exists') > -1;

class UserCtrl {

    async register(req, res) {
        try {
            await userService.saveUser(req.body);
            res.status(201).send();
        } catch (e) {
            if (hasValidationErrors(e)) res.status(500).send(e.errors);
            else if (keyExists(e)) res.status(400).send("User already exists");
            else {
                console.log(e);
                res.status(500).send("Internal Server Error");
            }
        }
    }

    async login(req, res) {
        const isValid = await userService.isLoginValid(req.body);
        if (isValid) {
            const token = await userService.generateToken(req.body);
            res.status(200).json({
                username: req.body.username,
                token
            });
        } else res.status(401).send("Unauthorized");
    }
}

module.exports = new UserCtrl();