module.exports = function (app, express) {
    app.use('/js', express.static('node_modules/bootstrap/dist/js')); // redirect bootstrap JS
    app.use('/js', express.static('node_modules/jquery/dist')); // redirect JS jQuery
    app.use('/css', express.static('node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
    app.use('/public', express.static('public'));
}