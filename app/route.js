const express = require('express');
const router = express.Router();
const userRepository = require('./user-repository');
const users = require("./db");

router.get('/add', (req, res) => {
    users.push({id: 1, name: "Test", firstname: "fTest", lastName: "lTest", password: "pTest"})
    users.push({id: 2, name: "Test1", firstname: "fTest1", lastName: "lTest1", password: "pTest1"})
    users.push({id: 3, name: "Test2", firstname: "fTest2", lastName: "lTest2", password: "pTest2"})
    res.send("users added")

});

router.get('/', (req, res) => {
    res.status(200).send(userRepository.getUsers())
});

router.get(`/:id`, (req, res) => {
    const foundUser = userRepository.getUserById(req.params.id);
    res.status(200).send(foundUser);
});

router.post('/', (req, res)=> {
    userRepository.createUser(req.body);
    res.status(201).end();
});

router.delete(`/:id`, (req, res) => {
    console.log(req.params.id)
    userRepository.deleteUser(parseInt(req.params.id))
    res.status(204).send('Utilisateur supprimé')
});

router.put(`/:id`, (req, res) => {
    console.log(req.params.id)
    userRepository.modifUser(parseInt(req.params.id))
    res.status(204).send('Utilisateur modifié')
});

module.exports = router;
