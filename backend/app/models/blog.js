var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
    user: String,
    body: String,
    date: Date
});

module.exports = mongoose.model('BlogEntry', BlogSchema);