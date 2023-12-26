// Write the same program to read text from the file using promises

const fs = require("fs");

function readTextFile() {
  console.log("inside main function"); // 1
  let p = new Promise(function (resolve) {
    console.log("inside promises"); // 2
    fs.readFile("textFile.txt", "utf-8", function (err, data) {
      console.log("before resolve"); // 4
      resolve(data);
    });
  });

  return p;
}

function onDone(data) {
  console.log(data); // 5
}

let promise = readTextFile();
console.log(promise); // 3
// the promise is returned synchoronously but the data from the promise is returned asynchronously

promise.then(onDone);
