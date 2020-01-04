module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('index.ejs', {
      env: process.env.NODE_ENV
    })
  })

  app.get('/administrative', function (req, res) {
    res.render('adminindex.ejs', {
      env: process.env.NODE_ENV
    })
  })
}
