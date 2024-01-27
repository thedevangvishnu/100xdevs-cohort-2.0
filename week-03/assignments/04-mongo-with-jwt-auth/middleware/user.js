const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const tokenArray = token.split(" ");
  const jwtToken = tokenArray[1];

  const decoded = jwt.verify(jwtToken, JWT_SECRET);
  const username = decoded.username;

  const user = await User.findOne({ username });

  if (!user) {
    return res
      .status(400)
      .json({ error: "User doesn't exist. Check email and password" });
  }

  req.username = username;
  next();
}

module.exports = userMiddleware;
