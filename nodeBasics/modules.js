// Own modules

const calculator = require("./modules/calculator");

const a = 10;
const b = 5;

console.log(calculator.add(a, b));
console.log(calculator.subtract(a, b));
console.log(calculator.multiply(a, b));
console.log(calculator.divide(a, b));

// Node.js built-in modules www.w3schools.com/nodejs/ref_modules.asp

const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("Hello World!");
  })
  .listen(8080);

// run node ./nodeBasics/modules.js and open http://localhost:8080/ to test

// single function import

const { myDateTime } = require("./modules/date");

console.log(myDateTime());
