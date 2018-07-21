module.exports = function (app) {
    app.get('/', (req, res) => res.render('index.ejs'));
    //app.get('/', (req, res) => res.send(__dirname));
}