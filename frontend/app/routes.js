module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('index.ejs', {
      env: process.env.NODE_ENV
    })
  })
}
