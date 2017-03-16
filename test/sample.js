const http = require('http');
const assert = require('assert');

const hostname = '127.0.0.1';
const port = 3000;

var util = require("./util.js");
var json = require("./test_json.json");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // var name = util.MY_NAME;
  // var header = json["test"];
  // console.log(header);
  res.end("test");

  // util();

 // console.error(new Error("this is a error"));
  
  //const name = "myname2";
  //console.warn('var name is ${name}! ok!');

});

server.listen(port, hostname, () => {
  console.log(`My Server running at http://${hostname}:${port}/`);
});

