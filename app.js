var http = require("http");

http.createServer(function(request, response){
  response.writeHead(200, { "Content-type": "text/plain" });
  response.end("Hello world!!\nThis is my server.\n");
}).listen(3005, "127.0.0.1");
