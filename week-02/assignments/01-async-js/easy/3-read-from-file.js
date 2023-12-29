const fs = require("fs");

fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log(data);
});

// expensive call
let counter = 0;
for (let i = 0; i < 10000000000; i++) {
  counter++;
}

// the more the time it takes to do the above operation, the latter the result will the logged to the console.
