var fs = require('fs');

var str = "this is my test";
console.log(process.argv.slice(2));

var filePath = "./hello.txt";

fs.writeFileSync(filePath, "this is my test file!");

var val = fs.readFileSync(filePath);
console.log(val.toString());

var json = require("./test_json.json");
console.log(json["header"].toString());

var files = fs.readdirSync("D:/Code/github/MyTetris/test");
files.forEach(function(file){
	console.log("file: " + file);
})