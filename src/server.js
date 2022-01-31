const express = require('express')
require ('dotenv').config({path:__dirname+'/../.env'})
const db = require('./database/db.js')
const routes =require('./routes/routes.js')
const app = express()
const port = process.env.PORT || 8080

db.connect()


app.use('/api',routes)

app.listen(port, () => console.log(`listening to port ${port}`))