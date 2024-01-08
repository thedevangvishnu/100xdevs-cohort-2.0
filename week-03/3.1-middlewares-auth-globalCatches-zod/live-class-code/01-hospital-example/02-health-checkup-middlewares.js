// Write the same http server using middlewares

const express = require("express");
const app = express();

const userMiddleware = (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "devang" || password != "1234") {
    res.status(403).json({ msg: "Invalid user. Check username and password" });
  } else {
    next();
  }
};

const kidneyMiddleware = (req, res, next) => {
  const kidneyId = req.query.kidneyId;

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({ msg: "Inavlid inputs. Check your inputs again" });
  } else {
    next();
  }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.json("Your kidneys are absolutely fine!");
});

app.listen(3000);
