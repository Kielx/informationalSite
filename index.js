const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 3000;

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
console.log(`Server is running on port ${port}`);
server.listen(port);
