const userRepository = require('../repositories/userRepository');
const { verifyPwd, getToken, hashPwd } = require('../utils/auth');

const saveUser = async (user) => {
    const hashedPwd = await hashPwd(user.password);
    user.password = hashedPwd;

    return userRepository.add(user);
}

const isLoginValid = async (user) => {
    const dbUser = await userRepository.getUser(user.username, user.password);
    if (!dbUser) return false;

    return await verifyPwd(user.password, dbUser.password);
}

const generateToken = (user) => {
    return getToken(user.username);
}


module.exports = {
    isLoginValid,
    generateToken,
    saveUser
};
