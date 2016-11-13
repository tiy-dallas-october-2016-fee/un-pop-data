var express = require('express');
var csv = require('./csv-parser.js');

var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/afganistan', function(req, res) {

  csv('afganistan-population-un.csv', function(data) {
    res.render('population-view', {
      title: 'Afganistan',
      statistics: data
    });
  });

});

app.get('/cambodia', function(req, res) {

  csv('cambodian-population-un.csv', function(data) {
    res.render('population-view', {
      title: 'Cambodia',
      statistics: data
    });
  });

});

app.get('/vietnam', function(req, res) {

  csv('viet-nam-population-un.csv', function(data) {
    res.render('population-view', {
      title: 'Viet Nam',
      statistics: data
    });
  });

});

var port = process.env.PORT || 2845;

app.listen(port, function() {
  console.log('listening on port ', port);
});
