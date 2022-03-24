const express = require('express')
const app = express()
const port = 3000
const users = require("./route");

app.use(express.static('public'))
app.use(express.json())
app.use((req, res, next) => {
    console.log(`Requête appelée le ${new Date().toLocaleString()}`)
    next()
})
app.use('/users', users)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})