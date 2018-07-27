module.exports = function (app, express, path) {
  app.use('/public', express.static(path.join(__dirname, '/../public')))
  app.use('/public', express.static(path.join(__dirname, '/../node_modules/bootstrap/dist/css')))
  app.use('/public', express.static(path.join(__dirname, '/../node_modules/jquery/dist')))
}
