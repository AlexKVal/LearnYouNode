var fs = require('fs');

var filePath = process.argv[2];

var buffer = fs.readFileSync(filePath, 'utf8');
var result = buffer.split('\n').length - 1;
console.log(result);
