
var express = require('express');
var app = express();

app.use(function(req, res, next){
    console.log(req.url);
    next();
});
 

app.use('/', express.static(__dirname));
app.get('/*', function(req, res) {
    res.status(404).sendFile(__dirname + '/error.html');
	console.log('404 Error');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

