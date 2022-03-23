const users = require('./db');

const getUsers = function () {
    return users
}

const getUsersById = function (id) {
    return users.find(user => id == user.id);

}

const createUser = function (data){
    users.push(data);
}

module.exports = {
    getUsers,
    getUsersById,
    createUser
}
