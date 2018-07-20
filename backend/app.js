var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8081;

var router = express.Router();

// configure mongoose here
require('./app/dbconfig')(mongoose);

// configure routes here
require('./app/routes')(router);

app.use('/api', router);

// index page for administrative access to database and the blog site

app.get('/', function(req, res) {
    res.render('index.ejs');   
});

app.listen(port);
console.log('API listening on port ' + port);