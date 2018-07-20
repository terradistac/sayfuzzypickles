#!/usr/bin/env nodejs
// import modules
const express = require('express');
const app = express();

// configure express
require('./app/config')(app, express);

//configure routes
require('./app/routes')(app);

app.listen(8080, () => console.log('Server listening on port 8080.'));
