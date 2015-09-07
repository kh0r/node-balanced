var http = require('http');
var PORT = process.env.PORT || 3000;
var os = require("os");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello world!\n'+'from: '+os.hostname());
}).listen(PORT);

console.log('%d listening on %d', process.pid, PORT);