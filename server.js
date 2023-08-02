const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const { PORT } = require("./config");

//set up http server using node.js
const server = http.createServer((req, res) => {
  fs.readFile("./public/index.html", (err, data) => {
    res.setHeader('Content-Type', 'text/html');
    if (err) {
      res.writeHead(500);
      return res.end('An error occured');
    }
    //sends an http status code
    res.writeHead(200);
    res.end(data);
  });

  //when request is made, server responds with "hello world"
  res.write("Hello World");
  //response headers and body are sent. Server closes connection

});

//run command node server.js will print this out in terminal
server.listen(PORT, () => console.log("Server running on port 8000!"));

