const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const { PORT } = require("./config");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Hello World");
  res.end();
});

//run command node server.js will print this out in terminal
server.listen(PORT, () => console.log("Server running on port 8000!"));

