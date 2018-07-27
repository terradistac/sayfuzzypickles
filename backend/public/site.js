$(document).ready(function () {
  let newArticleEditor = '<div class="popup">' +
    '<div class="row" id="new-editor">' +
    '<div class="col-sm-8 mt-5 mb-5" style="margin: auto;padding-left: 0;padding-right: 0;">' +
    '<h5>Write a new blog entry.</h5>' +
    '<button type="button" class="close"><span aria-hidden="true">&times;</span></button>' +
    '<form action="http://localhost/services/createentry" method="post">' +
    '<div class="form-group">' +
    '<label for="nameInput">Your name</label>' +
    '<input type="text" class="form-control" name="nameInput">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="titleInput">Article title</label>' +
    '<input type="text" class="form-control" name="titleInput">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="editor">Write blog entry here</label>' +
    '<textarea class="form-control" id="editor" name="textInput" rows="3"></textarea>' +
    '</div>' +
    '<div class="form-group">' +
    '<input type="hidden" name="date" id="date">' +
    '</div>' +
    '<button type="submit" class="btn btn-light">Submit</button>' +
    '</form>' +
    '</div>' +
    '</div>' +
    '</div>'

  $('#new-toggle').click(function () {
    if (!($('#new-editor').length)) {
      $('body').append(newArticleEditor)
      var date = new Date().toDateString()
      $('#date').val(date)
      $('.close').click(function () {
        $('.popup').remove()
      })
    }
  })

  $.getJSON('http://localhost/services/retrieveentries', function (data) {
    for (let i = data.length - 1; i >= 0; i--) {
      // append contents to listofarticles
      var title = "<div id='title-" + i + "'><u>" + data[i].title + '</u></div>'
      $('#listofarticles').append(title)
      $('#listofarticles').append('<br>')
    }
    for (let k = data.length - 1; k >= 0; k--) {
      let editor = '<div class="popup">' +
        '<div class="row" id="editordelete-' + k + '">' +
        '<div class="col-sm-8 mt-5 mb-5" style="margin: auto;padding-left: 0;padding-right: 0;">' +
        '<h5>Edit the blog entry</h5>' +
        '<button type="button" class="close"><span aria-hidden="true">&times;</span></button>' +
        '<form action="http://localhost/services/editentries" method="post">' +
        '<div class="form-group">' +
        '<label for="nameInput">Author\'s name</label>' +
        '<input type="text" class="form-control" name="nameInput" value="' + data[k].user + '">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="titleInput">Article title</label>' +
        '<input type="text" class="form-control" name="titleInput" value="' + data[k].title + '">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="editor">Write blog entry here</label>' +
        '<textarea class="form-control" id="editor" name="textInput" rows="3">' + data[k].body + '</textarea>' +
        '</div>' +
        '<div class="form-group">' +
        '<input type="hidden" name="id" value="' + data[k]._id + '">' +
        '</div>' +
        '<button type="submit" class="btn btn-light">Submit</button>' +
        '</form>' +
        '<form action="http://localhost/services/deleteentry" method="post">' +
        '<div class="form-group">' +
        '<input type="hidden" name="id" value="' + data[k]._id + '">' +
        '</div>' +
        '<button type="submit" class="btn btn-warning">Delete</button>' +
        '</form>' +
        '</div>' +
        '</div>' +
        '</div>'

      $('#title-' + k).click(function () {
        if (!($('#editordelete-' + k).length)) {
          $('body').append(editor)
          $('.close').click(function () {
            $('.popup').remove()
          })
        }
      })
    }
  })
})
