var fs = require('fs');

var filePath = process.argv[2];

var buffer = fs.readFile(filePath, 'utf8', function (err, data) {
  if (err) return;

  var result = data.split('\n').length - 1;
  console.log(result);
});
