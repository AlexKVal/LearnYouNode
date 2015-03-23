var http = require('http');

http.get(process.argv[2], function (response) {
  // console.log('STATUS:', response.statusCode, http.STATUS_CODES[response.statusCode]);

  response.setEncoding('utf8');

  response.on('data', console.log);
});
