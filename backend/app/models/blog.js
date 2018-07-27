var mongoose = require('mongoose')
var Schema = mongoose.Schema

var BlogSchema = new Schema({
  user: String,
  title: String,
  body: String,
  date: String
})

module.exports = mongoose.model('BlogEntry', BlogSchema)
