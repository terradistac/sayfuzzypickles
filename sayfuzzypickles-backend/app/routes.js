module.exports = function (router) {
  var BlogEntry = require('./models/blog')

  router.route('/createentry')
    .post(function (req, res) {
      let entry = new BlogEntry()
      entry.body = req.body.textInput
      entry.user = req.body.nameInput
      entry.title = req.body.titleInput
      entry.date = req.body.date

      entry.save(function (err) {
        if (err) {
          res.send(err)
        }
        res.redirect('http://www.sayfuzzypickles.net')
      })
    })

  router.route('/retrieveentries')
    .get(function (req, res) {
      BlogEntry.find({}, function (err, entries) {
        if (err) {
          res.send(err)
        }
        res.setHeader('Access-Control-Allow-Origin', 'http://www.sayfuzzypickles.net')
        res.send(entries)
      })
    })

  router.route('/editentries')
    .post(function (req, res) {
      BlogEntry.where({
        _id: req.body.id
      }).update({
        body: req.body.textInput,
        user: req.body.nameInput,
        title: req.body.titleInput,
        date: req.body.date
      }, function (err, entries) {
        if (err) {
          res.send(err)
        }
        res.send(entries)
      })
    })

  router.route('/deleteentry')
    .post(function (req, res) {
      BlogEntry.where({
        _id: req.body.id
      }).remove({}, function (err) {
        if (err) {
          res.send(err)
        } else {
          res.send('success')
        }
      })
    })
}
