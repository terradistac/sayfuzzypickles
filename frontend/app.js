#!/usr/bin/env nodejs

const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const helmet = require('helmet')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const port = process.env.port || 8080

require('dotenv').config()
require('./app/dbconfig')(mongoose)
require('./app/config')(app, express, path)
require('./app/routes')(app)

app.use(helmet())
app.use(session({
  name: 'session',
  secret: process.env.SESS_SECRET,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}))

app.listen(port, () => console.log('Server listening on port ' + port))
