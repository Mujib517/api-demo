const userRepository = require("../repositories/userRepository");
const { getToken, hashPwd, verifyPwd } = require("../utils/auth");

const hasValidationErrors = (e) => e.errors && e.errors.length === 0;

const keyExists = (e) => e.original && e.original.detail.indexOf('already exists') > -1;

class UserCtrl {

    async register(req, res) {
        try {
            const hashedPwd = await hashPwd(req.body.password);
            req.body.password = hashedPwd;
            await userRepository.add(req.body);

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
        const username = req.body.username;
        const pwd = req.body.password;

        const user = await userRepository.getUser(username, pwd);

        if (user) {
            const isValid = await verifyPwd(pwd, user.password);
            if (isValid) {
                const token = await getToken(username);
                const response = {
                    username,
                    token
                }
                res.status(200).send(response);
            }
            else res.status(401).send("Invalid username or password");
        }
        else res.status(401).send("Invalid username or password");
    }
}

module.exports = new UserCtrl();