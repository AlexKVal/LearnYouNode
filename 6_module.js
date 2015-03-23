var fs = require('fs');
var path = require('path');

module.exports = function (dirPath, extFilter, cb) {
  fs.readdir(dirPath, function (err, list) {
    if (err) return cb(err);

    var filteredList = list.filter(function (filename) {
      return path.extname(filename) === '.'+extFilter;
    });

    cb(null, filteredList);
  });
};
