var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var path = process.argv[3];

var srv = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });
  fs.createReadStream(path, {encoding: 'utf8'}).pipe(res);
});

srv.listen(port);
