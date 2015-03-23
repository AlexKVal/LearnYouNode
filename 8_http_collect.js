var http = require('http');

var fullString = '';

http.get(process.argv[2], function (response) {
  // console.log('STATUS:', response.statusCode, http.STATUS_CODES[response.statusCode]);

  response.setEncoding('utf8');
  response.on('data', function (chunk) {
    fullString += chunk;
  });
  response.on('end', function () {
    console.log(fullString.length);
    console.log(fullString);
  });
});
