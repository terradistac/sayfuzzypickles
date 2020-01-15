module.exports = function (app, express, path) {
  app.use('/public', express.static(path.join(__dirname, '/../public')))
  app.set('views', path.join(__dirname, '/../views'))
}
