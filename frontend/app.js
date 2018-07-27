#!/usr/bin/env nodejs
// import modules
const express = require('express')
const app = express()
const path = require('path')

// configure express
require('./app/config')(app, express, path)

// configure routes
require('./app/routes')(app)

app.listen(8080, () => console.log('Server listening on port 8080.'))
