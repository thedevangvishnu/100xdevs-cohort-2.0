const fs = require("fs");

let content = "";

fs.readFile("file.txt", "utf-8", (err, data) => {
  content = data;
  console.log(content);
  const extraSpaceRegex = /\s+/g;
  content = content.replace(extraSpaceRegex, " ");

  fs.writeFile("file.txt", content, (err) => {
    if (err) {
      console.error(`Cannot write to the file: ${err}`);
    } else {
      console.log("Write to file successfull");
    }
  });
});
