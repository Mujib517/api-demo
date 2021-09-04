const { verifyToken } = require('./auth');

function basicAuth(req, res, next) {
    const authorization = req.headers.authorization;

    if (!authorization) {
        res.status(401).send("Unauthorized");
        return;
    }

    const base64String = authorization.split(' ')[1];
    const buffer = Buffer(base64String, 'base64');
    const decodedString = buffer.toString();
    const credentials = decodedString.split(':'); // [username, password]

    if (credentials[0] === 'mujib' && credentials[1] === 'password') next();
    else res.status(401).send("Unauthorized");
}

const tokenAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            res.status(401).send("Unauthorized");
        } else {
            const token = authHeader.split(' ')[1];
            await verifyToken(token);
            next();
        }
    } catch (e) {
        res.status(401).send("Unauthorized");
    }
}


module.exports = {
    basicAuth,
    tokenAuth
}