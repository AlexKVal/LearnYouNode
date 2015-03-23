var http = require('http');
var url = require('url');

// curl http://localhost:8080/api/parsetime?iso=2013-08-10T12:10:15.474Z
// {"hour":15,"minute":10,"second":15}
//
// curl http://localhost:8080/api/unixtime?iso=2013-08-10T12:10:15.474Z
// {"unixtime":1376136615474}

http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true);

  var iso = parsedUrl.query.iso;
  if (!iso) return res.end('no iso provided\n');

  var date = new Date(iso);

  var result;
  switch (parsedUrl.pathname) {
    case '/api/parsetime':
      result = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      };
      break;

    case '/api/unixtime':
      result = { unixtime: date.getTime() };
      break;

    default:
      break;
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(process.argv[2]);
