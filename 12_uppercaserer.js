var http = require('http');
var through2map = require('through2-map');

var port = process.argv[2];

http.createServer(function (req, res) {
  req.pipe(through2map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
}).listen(port);
