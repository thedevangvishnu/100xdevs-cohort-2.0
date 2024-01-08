// Create a "health-checkup" server that allows users to check their final report status (which is a string) only if they are logged in (use postman to send username and password) and provide a kidneyId
// Do not use middlewares

const express = require("express");
const app = express();

app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  // console.log(username);
  // console.log(password);
  // console.log(kidneyId);

  if (username != "devang" || password != "1234") {
    res
      .status(403)
      .json({ msg: "User does not exist. Check username and/or password" });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({ msg: "Something is wrong with your inputs" });
  }

  res.json({ msg: "Your kidneys are fine" });
});

app.listen(3000);
