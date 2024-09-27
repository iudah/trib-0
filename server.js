// load http module
const http = require("http");
// make accessible over hotspot connection
const hostname = "0.0.0.0";
const port = 3300;


//create server
const server = http.createServer((req, res) => {
  // create response
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello from ${hostname}:${port}`); 
});

server.listen(port, hostname, ()=>{
  console.log(`Server serving at ${hostname}:${port}\n`);
});
