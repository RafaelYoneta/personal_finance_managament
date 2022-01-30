const express = require('express')
require ('dotenv').config({path:__dirname+'/../.env'})
const db = require('./database/db.js')
const app = express()
const port = process.env.PORT || 8080

db.connect()


app.listen(port, () => console.log(`listening to port ${port}`))