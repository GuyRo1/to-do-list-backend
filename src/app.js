const express = require('express')
const toDoRouter = require('./routers/toDo.js')
const cors = require('cors')
require('./db/mongoose')


const app = express()

// app.use(cors({
//     origin:'http//localhost:3000'
// }))
app.use(cors())
app.use(express.json())
app.use('/to-do', toDoRouter)

module.exports = app


