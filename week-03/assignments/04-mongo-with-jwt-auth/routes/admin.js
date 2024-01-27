const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username, password });
  console.log(admin);

  if (admin) {
    return res
      .status(400)
      .json({ error: "Admin already exists. Try signing in" });
  }

  await Admin.create({
    username,
    password,
  });
  return res.status(201).json({ message: "Admin created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.headers.username;
  const password = req.headers.password;

  const admin = await Admin.findOne({
    username,
    password,
  });

  if (!admin) {
    return res.status(400).json({
      error:
        "Admin doesn't exist. Check username and password or sign up if you're new",
    });
  }

  const token = jwt.sign({ username }, JWT_SECRET);
  return res.status(201).json({ message: "Admin sign in successful", token });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, imageLink, price, isPublished } = req.body;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
    isPublished,
  });

  return res
    .status(201)
    .json({ message: "Course created successfully", courseId: newCourse._id });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find();

  return res.status(200).json(courses);
});

module.exports = router;
