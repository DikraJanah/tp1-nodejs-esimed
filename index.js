const express = require('express')
const app = express()
const port = 3000
const { users } = require('./db');

const userRepository = require('./user-repository');

//Pour gérer ttes les requêtes de types json
app.use(express.json())

//Intégration de sécurité
//app.use(helmet());


function clientErrorHandler (err, req, res, next) {
    if (req.xhr) {
        res.status(200).send({ error: 'Tout est bon !' })
    } else {
        next(err)
    }
}

//Securité
//var crypto = require('crypto');
//var name = 'mon mot de passe';
//var hash = crypto.createHash('md5').update(name).digest('hex');

app.use((req, res, next) => {
    console.log(`request called at : ${new Date().toISOString()}`)
    next()
})

//Description du middle wear
//expresss : mais à disposition des fichiers statiques
//je lui attribue un repertoire, ici public crée en amont
app.use(express.static('public'));

//app.use((err, req, res, next) => {
//  res.send(500);
// console.log(`request called at : ${new.Date()}`)
// next()
//})

app.get('/', (req, res) => {
    users.push({ id: 1, firstname : 'nameTest', lastName: "test", password : "testA"});
    users.push({ id: 1, firstname : 'nameTestB', lastName: "test1", password : "testA"});
    users.push({ id: 1, firstname : 'nameTestB', lastName: "test2", password : "testA"});    res.send('Hello World!')
})

app.get('/users/:id', (req,res) => {
    console.log(req.params.id)
    console.log(req.params.id)
    res.send(UserRepository.getUsersById(req.parms.id));
    // res.send(`get user whith id ${req.params.id}`);
})

app.get('/users/:id', (req,res) => {
    console.log(req.params.firstname)
    console.log(req.params.firstname)
    res.send(UserRepository.getUsersById(req.parms.firstname));
    // res.send(`get user whith id ${req.params.id}`);
})

app.get('/groups/:groupId/users/:userId', (req,res) => {
    //console.log(req.params)
    res.send(userRepository.getUsersById(req.params.id));
    //res.send(`get user with id ${req.params.groupId} and user id : ${req.params.userId}`);
})

app.put('/users/:id', (req,res) => {
    //console.log(req.params)
    res.send(userRepository.getUsersById(req.params.id));
    //res.send(`get user with id ${req.params.groupId} and user id : ${req.params.userId}`);
})

app.delete('/users/:id', (req,res) => {
    //console.log(req.params)
    res.send(userRepository.getUsersById(req.params.id));
    //res.send(`get user with id ${req.params.groupId} and user id : ${req.params.userId}`);
})

//envoyer des données et les inspecter sous format json comme déclarer en ligne 5
//
app.post('/create-user-form', (req, res) => {
    userRepository.createUser(req.body);
    //console.log(req.body)
    res.send('Everything ok\n')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`
    )});