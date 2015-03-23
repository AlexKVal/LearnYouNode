var fs = require('fs');
var extname = require('path').extname;

var dirPath = process.argv[2];
var extToFilter = '.'+process.argv[3];

fs.readdir(dirPath, function (err, list) {
  if (err) return;

  list.forEach(function (fileName) {
    if (extname(fileName) === extToFilter) {
      console.log(fileName);
    }
  });
});
