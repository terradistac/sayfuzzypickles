module.exports = function (router) {
    // take in mongoose model here
    var blogEntry = require('./models/blog');

    router.route('/createentry')
    .post(function(req, res){
        let entry = new blogEntry();
        entry.body = req.body.textInput;
        entry.user = req.body.nameInput;
        entry.date = req.body.date;

        entry.save(function(err){
            if (err){
                res.send(err);
            }
            res.redirect('http://localhost');
        })
    })

    router.route('/retrieveentries')
    .get(function(req, res){
        blogEntry.find({}, function(err, entries) {
            if (err){
                res.send(err);
            }
            res.setHeader("Access-Control-Allow-Origin", "http://localhost");
            res.send(entries);
        })
    })
}