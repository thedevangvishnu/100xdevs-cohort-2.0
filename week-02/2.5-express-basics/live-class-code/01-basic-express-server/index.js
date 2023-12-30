// Creat an express http server that calculates the sum of all numbers till n and prints the result as the response on the screen

const express = require("express");
const app = express();

const sum = (n) => {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer += i;
  }
  return answer;
};

app.get("/", (req, res) => {
  const number = req.query.n;
  const result = sum(number);
  res.send(`Your answer is: ${result.toString()}`);
});

app.listen(3000);
