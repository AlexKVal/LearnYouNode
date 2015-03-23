var net = require('net');

var port = process.argv[2];

// 'YYYY-MM-DD hh:mm'

function twoDig(num) {
  return ("0" + num).slice(-2);
}

var server = net.createServer(function (socket) {
  // console.log('client connected');
  var now = new Date();
  var response = '' +
    now.getFullYear() + '-' +
    twoDig(now.getMonth()+1) + '-' +
    twoDig(now.getDate()) + ' ' +
    twoDig(now.getHours()) + ':' +
    twoDig(now.getMinutes()) + '\n';
  socket.end(response);
});

server.listen(port, function () {
  console.log('server listens on', port, 'port.');
});
