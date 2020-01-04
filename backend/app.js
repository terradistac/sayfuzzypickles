const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const helmet = require('helmet')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const port = process.env.port || 8081
const router = express.Router()

require('./app/dbconfig')(mongoose)
require('./app/routes')(router)

app.use(helmet())

app.use(session({
  name: 'session',
  secret: process.env.SESS_SECRET,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', router)

app.listen(port)
