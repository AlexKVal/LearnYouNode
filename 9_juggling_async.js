var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2);

var results = [];
var callbacksCounter = 0;

urls.map(function (url, indx) {
  http.get(url, function (res) {
    res.pipe(bl(function (err, data) {
      if (err) return console.log(err);

      results[indx] = data.toString();
      callbacksCounter++;
      if (callbacksCounter === 3) {
        // we have all three url-data
        console.log(results.join('\n'));
      }
    }));
  });
});
