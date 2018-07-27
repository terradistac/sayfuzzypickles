module.exports = function (app, express, path) {
  app.use('/public', express.static(path.join(__dirname, '/../node_modules/bootstrap/dist/js'))) // redirect bootstrap JS
  app.use('/public', express.static(path.join(__dirname, '/../node_modules/jquery/dist'))) // redirect JS jQuery
  app.use('/public', express.static(path.join(__dirname, '/../node_modules/bootstrap/dist/css'))) // redirect CSS bootstrap
  app.use('/public', express.static(path.join(__dirname, '/../public')))
}
