// Practice using the fs module and its common methods

const fs = require("fs");

// Write to a file
const message = "This text is written to this file using writeFile() method!";
fs.writeFile("writeFile.txt", message, (err) => {
  if (err) {
    console.log(`Error occurred while writing: ${err}`);
  } else {
    console.log("Written successfully");
  }
});

// REad from a file
fs.readFile("./intro.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(`Error occurred while reading: ${err}`);
  } else {
    console.log("Message from file:", data);
  }
});

// Append to a file
const appendMessage = " This sentence was added using appendFile() method.";
fs.appendFile("./writeFile.txt", appendMessage, (err) => {
  if (err) {
    console.log(`Error occurred while appending: ${err}`);
  } else {
    console.log("Appended successfully");
  }
});

// Delete from the file
fs.unlink("./delete.txt", (err) => {
  if (err) {
    console.log(`Error occurred while deleting: ${err}`);
  } else {
    console.log("Deleted successfully");
  }
});
