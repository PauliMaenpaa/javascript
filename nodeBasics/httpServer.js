// node.js built-in module 'http', allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP)
// module can create HTTP server, that listens to server ports and gives response back to client

// createServer is http module function, that returns http.Server object instance
// listen method is part of http.Server object, and it sets server listen to port defined as method parameter

// res.writeHead takes HTTP status code and a response object containing response headers as arguments
// Informs the client how to handle the response

// createServer req argument is client-side request as http.IncomingMessage object
// object holds information about request (HTTP-method, headers, URL-parameters...)

// req.url attribute is part of request URL after the domain name, including query parameters

const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.write(req.url);
    res.end();
  })
  .listen(8080);

// try: run 'node ./nodeBasics/httpServer.js' and go to 'http://localhost:8080/' <- try add text after domain name and open in browser

// url module splits up a web address into readable parts
// parse query parameters from url
// respond with parsed query parameters as a string

// url.parse(req.url, true).query: useful for handling query parameters as an object
// second argument 'true' transforms query parameters into an object, allowing easy access to key-value pairs

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const q = url.parse(req.url, true).query;
    const txt = `Received query parameters: ${JSON.stringify(q)}`;
    res.write(txt);
    res.end();
  })
  .listen(8090);

// http://localhost:8090/?year=2024&month=November <- query parameters comes after '?' and separated by '&'
