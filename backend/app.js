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

// require('dotenv').config()

// configure app here
require('./app/config')(app, express, path)

// configure mongoose here
require('./app/dbconfig')(mongoose)

// configure routes here
require('./app/routes')(router)

// security section
app.use(helmet())

app.use(session({
  name: 'session',
  secret: '&dh$~H[*TiAhzb}%e_!&qZM>F37ure6q6_hsXj6}(G#e]%sM',
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', router)

// index page for administrative access to database and the blog site

app.get('/', function (req, res) {
  res.render('index.ejs', {
    env: process.env.NODE_ENV
  })
})

app.listen(port)
console.log('API listening on port ' + port)
