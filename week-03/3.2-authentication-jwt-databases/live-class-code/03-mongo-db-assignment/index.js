const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017");

const User = mongoose.model("Users", {
  name: String,
  username: String,
  password: String,
});

const user = new User({
  name: "Amika",
  username: "amika1234@gmail.com",
  password: "12341234",
});

user.save();
