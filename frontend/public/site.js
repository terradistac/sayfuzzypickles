$(document).ready(function () {
  $.getJSON('http://localhost/services/retrieveentries', function (data) {
    var i = data.length - 1
    while (i >= 0) {
      // append contents to article-space
      var title = '<h1>' + data[i].title + '</h1>'
      var article = '<p>' + data[i].body + '</p>'
      var name = '<p>Written by: ' + data[i].user + ' and submitted on: ' + data[i].date + '</p>'
      $('#article-space').append(title)
      $('#article-space').append('<br>')
      $('#article-space').append(article)
      $('#article-space').append('<br>')
      $('#article-space').append(name)
      $('#article-space').append('<hr>')
      i--
    }
  })
})
