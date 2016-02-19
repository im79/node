var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
console.log('request starting...');

var filePath = './public' + request.url;
if (filePath == './public/') filePath = './public/index.html';

filePath = removeURLParameter(filePath);

var extname = path.extname(filePath);
var contentType = 'text/html';
switch (extname) {
    case '.js':
        contentType = 'text/javascript';
        break;
    case '.css':
        contentType = 'text/css';
        break;
    case '.json':
        contentType = 'application/json';
        break;
    case '.png':
        contentType = 'image/png';
        break;      
    case '.jpg':
        contentType = 'image/jpg';
        break;

}

fs.readFile(filePath, function(error, content) {
    if (error) {
        console.log('error');
        if(error.code == 'ENOENT'){
            console.log(filePath + ' - 404');
            fs.readFile('./public/404.html', function(error, content) {
                response.writeHead(404, { 'Content-Type': contentType });
                response.end(content, 'utf-8');
            });
        }else {
            console.log('500');
            response.writeHead(500);
            response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            response.end(); 
        }
    } else {
        console.log('ok');
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(content, 'utf-8');
    }
});

}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');

function removeURLParameter(url) {
    var urlparts= url.split('?');
    url= urlparts[0];
    return url;
}