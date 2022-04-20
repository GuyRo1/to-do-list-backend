const express = require('express')
const toDoRouter = require('./routers/toDo.js')
const cors = require('cors')
require('./db/mongoose')


const app = express()


app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}))
app.use(express.json())
app.use('/to-do', toDoRouter)
app.use('/', (req, res) => { res.send('ok') })

module.exports = app


