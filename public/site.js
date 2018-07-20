$(document).ready(function () {
    $.getJSON("http://localhost:8081/api/retrieveentries", function (data) {
        var i = data.length - 1;
        while (i >= 0) {
            // append contents to article-space
            var article = "<p>" + data[i].body + "</p>";
            var name = "<p>Written by: " + data[i].user + " and submitted on: " + data[i].date + "</p>";
            $('#article-space').append(article);
            $('#article-space').append("<br>");
            $('#article-space').append(name);
            $('#article-space').append("<hr>");
            i--;
        }
    });
})