#!/usr/bin/env nodejs
// import modules
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const helmet = require('helmet')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const port = process.env.port || 8080

require('dotenv').config()

// connect to database using mongoose
require('./app/dbconfig')(mongoose)

// configure express
require('./app/config')(app, express, path)

// configure routes
require('./app/routes')(app)

// security section
app.use(helmet())
app.use(session({
  name: 'session',
  secret: '&dh$~H[*TiAhzb}%e_!&qZM>F37ure6q6_hsXj6}(G#e]%sM',
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}))

app.listen(port, () => console.log('Server listening on port ' + port))
