// Write a program that reads text from a file
// use fs.readFile

const fs = require("fs");

fs.readFile("textFile.txt", "utf-8", function (err, data) {
  console.log(data); // this line will be executed alast
});

console.log("hello world 1"); // the line will be executed first

let ans = 0;
for (let i = 0; i < 100000000; i++) {
  ans++;
}

console.log("hello world 2"); // this line will be executed second

// Note: the control reaches back to async calls when it is done with all the sychronous code
