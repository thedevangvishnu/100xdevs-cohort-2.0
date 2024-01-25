const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "13247907214rwerhbp14230u";

const app = express();

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

const userExists = (username, password) => {
  let userExistsInDb = false;
  ALL_USERS.forEach((user) => {
    if (user.username === username && user.password === password) {
      userExistsInDb = true;
    }
  });
  return userExistsInDb;
};

app.use(express.json());

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({ error: "User doesn't exist" });
  }

  const token = jwt.sign({ username: username }, jwtPassword);
  res.status(200).json(token);
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;

  const decoded = jwt.verify(token, jwtPassword);
  const username = decoded.username;

  //   return all users except for the signed in user who is making this request
  const users = ALL_USERS.filter((user) => user.username != username);
  res.status(200).json(users);
});

app.listen(3000);
