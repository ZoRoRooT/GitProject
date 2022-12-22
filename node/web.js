const http = require("http");
const port = 3003;
const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  console.log(req.url);
  if (req.url == "/") {
    req.statusCode = 200;
    res.end("<h1> Super</h1>");
  } 
  else if (req.url == "/about") {
    res.end("<h1> about Super</h1>");
  }
   else {
    req.statusCode = 404;
    res.end("<h1> http not found</h1>");
  }
});
server.listen(port, () => {
  console.log(`server port are ${port}`);
});
