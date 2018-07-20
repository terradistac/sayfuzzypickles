module.exports = function (app, express) {
    app.use('/js', express.static(__dirname + '/../node_modules/bootstrap/dist/js')); // redirect bootstrap JS
    app.use('/js', express.static(__dirname + '/../node_modules/jquery/dist')); // redirect JS jQuery
    app.use('/css', express.static(__dirname + '/../node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
    app.use('/public', express.static(__dirname + '/../public'));
}