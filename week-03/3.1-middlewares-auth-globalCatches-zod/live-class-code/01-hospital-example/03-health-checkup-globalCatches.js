// Use global catches to send a more meanigful error message to user if they provide the wrong inputs

const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneysLeght = kidneys.length;
  res.send(`Your kidneys length is: ${kidneysLeght}`);
});

app.use((err, req, res, next) => {
  res.json({ msg: "Invalid inputs" });
});

app.listen(3000);
