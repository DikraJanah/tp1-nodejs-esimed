const users = require('./db')
const getUsers = function () {
    return users
}
const getUserById = (id) => {
    return users.find(u => id === u.id);
}
const createUser = function (body) {
    const id = Math.random()
    const firstName = body.firstname
    const lastName = body.lastName
    const password = body.password
    users.push({id, firstName, lastName, password: md5(password)})
}
const deleteUser = function (id) {
    const user = users.findIndex((u) => id == u.id)
    return users.splice( user, 1 )

}

const modifUser = function (id) {
    return users.values()
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    modifUser
}