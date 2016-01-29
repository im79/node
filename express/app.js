var express = require('express');
var app = express();

var birds = require('./birds');

app.use('/birds', birds);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

