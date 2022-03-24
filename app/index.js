const express = require('express')
const app = express()
const port = 3000
const users = require("./route");

app.use(express.static('public'))
app.use(express.json())
app.use((req, res, next) => {
    console.log(`Requête appelée le ${new Date().toLocaleString()}`)
    next()
    console.log(req.method)
    console.log(req.ip)
    console.log(req.route.path)
})
app.use('/users', users)

app.use(function(err, req, res, next) {
    res.status(500).send(err.message);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})