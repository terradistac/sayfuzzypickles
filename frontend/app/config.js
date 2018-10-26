module.exports = function (app, express, path) {
  app.use('/public', express.static(path.join(__dirname, '/../node_modules/bootstrap/dist/js')))
  app.use('/public', express.static(path.join(__dirname, '/../node_modules/jquery/dist')))
  app.use('/public', express.static(path.join(__dirname, '/../node_modules/bootstrap/dist/css')))
  app.use('/public', express.static(path.join(__dirname, '/../public')))
}
