import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Healthy server!" });
});

app.get("/login", (req, res) => {
  res.json({ message: "Login request" });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}...`);
});
