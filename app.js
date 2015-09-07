var http = require('http');
var os = require("os");
var redis = require("redis");

var PORT = process.env.PORT || 3000;
var KEY_HIT_COUNTER = "KEY_HIT_COUNTER";

http.createServer(function (req, res) {
  client = redis.createClient();

  client.incr(KEY_HIT_COUNTER);

  client.get(KEY_HIT_COUNTER, function (err, value){
    if (err) throw(err);
    var response = 'Hello world!\n';
    response += 'from: ' + os.hostname() + '\n';
    response += 'hit counter: ' + value;

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(response);

    client.quit();
  });


}).listen(PORT);

console.log('%d listening on %d', process.pid, PORT);