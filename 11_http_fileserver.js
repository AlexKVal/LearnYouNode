var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var path = process.argv[3];

var srv = http.createServer(function (req, res) {
  var fileStream = fs.createReadStream(path); //, {encoding: 'utf8'});
  fileStream.pipe(res);
});

srv.listen(port);
