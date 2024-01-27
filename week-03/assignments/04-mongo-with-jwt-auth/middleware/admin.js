const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const tokenArray = token.split(" ");
  const jwtToken = tokenArray[1];

  const decoded = jwt.verify(jwtToken, JWT_SECRET);
  const username = decoded.username;

  const admin = await Admin.findOne({ username });

  if (!admin) {
    return res
      .status(400)
      .json({ error: "Admin doesn't exist. Check username and password" });
  }

  next();
}

module.exports = adminMiddleware;
