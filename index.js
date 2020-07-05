var http = require("http");
var fs = require("fs");
const url = require("url");

server = http.createServer(function (req, res) {
  let q = url.parse(req.url, true);
  let filename = "." + q.pathname;
  fs.readFile(filename, function (err, data) {
    if (err) {
      fs.readFile("404.html", function (err, dat) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(dat);
        return res.end();
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    }
  });
});

server.listen(3000);
