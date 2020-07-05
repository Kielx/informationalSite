var http = require("http");
var fs = require("fs");

server = http.createServer(function (req, res) {
  fs.readFile("index.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    console.log("running");
    return res.end();
  });
});

server.listen(3000);
