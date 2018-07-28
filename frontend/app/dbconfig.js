module.exports = function (mongoose) {
  mongoose.connect(process.env.DB_CONN)
}
