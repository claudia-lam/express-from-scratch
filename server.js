const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const { PORT } = require("./config");

//set up http server using node.js
const server = http.createServer((req, res) => {
  fs.readFile("./public/index.html", (err, data) => {
    //set the header content type to be text/html b/c we are serving index.html
    res.setHeader('Content-Type', 'text/html');
    if (err) {
      res.writeHead(500);
      return res.end('An error occured');
    }
    //sends an http status code
    res.writeHead(200);
    //response headers and body are sent. Server closes connection
    res.end(data);
  });
});

//run command node server.js will print this out in terminal
server.listen(PORT, () => console.log("Server running on port 8000!"));

