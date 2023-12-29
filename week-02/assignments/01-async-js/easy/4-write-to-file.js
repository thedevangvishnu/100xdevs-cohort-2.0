const fs = require("fs");

fs.writeFile("file.txt", "I have succesfully writen to the file!", (err) => {
  if (err) {
    console.error(`Cannot be written due to: ${err}`);
  } else {
    console.log("Done!");
  }
});
