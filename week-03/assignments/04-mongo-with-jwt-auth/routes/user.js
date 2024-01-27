const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

const router = Router();

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (user) {
    return res
      .status(400)
      .json({ error: "User already exists. Try signing in" });
  }

  await User.create({ username, password });
  return res.status(201).json({ message: "User created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.headers.username;
  const password = req.headers.password;

  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(400).json({
      error:
        "User doesn't exist. Check email and password or sign up if you're new.",
    });
  }

  const token = jwt.sign({ username }, JWT_SECRET);
  return res.status(200).json({ message: "User sign in successful", token });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({
    isPublished: true,
  });

  return res.status(200).json(courses);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.username;

  await User.updateOne(
    { username },
    {
      $push: { purchasedCourses: courseId },
    }
  );

  return res.status(200).json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.username;

  const user = await User.findOne({ username });

  const coursesPurchasedByUser = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  return res.status(200).json(coursesPurchasedByUser);
});

module.exports = router;
