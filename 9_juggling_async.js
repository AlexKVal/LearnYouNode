var http = require('http');
var bl = require('bl');
var async = require('async');

var urls = process.argv.slice(2);

function printResults(err, results) {
  if (err) return console.log(err);
  console.log(results.join('\n'));
}

function getData(url, cb) {
  http.get(url, function (res) {
    res.pipe( bl( function (err, data) {
      if (err) return cb(err);
      cb(null, data.toString());
    }));
  });
}

async.map(urls, getData, printResults);
