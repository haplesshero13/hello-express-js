var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send({hello: new Date()});
});

app.get('/foo', function (req, res) {
  res.send('bar');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
