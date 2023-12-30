// Create 4 routes (4 things that the hospital can do)
// GET - user can check how many kidneys they have and their health
// POST - User can add a new kidney
// PUT - User can replace a kidney, make it healthy
// DELETE - User can remove all unhealthy kidney

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

const express = require("express");
const app = express();

// user can check how many kidneys they have and their health
app.get("/", (req, res) => {
  let numberOfKidneys, numberOfHealthyKidneys, numberOfUnhealthyKidneys;
  for (const user of users) {
    const userKidneys = user.kidneys;
    numberOfKidneys = userKidneys.length;
    const healthyKidneys = userKidneys.filter(
      (kidney) => kidney.healthy === true
    );
    numberOfHealthyKidneys = healthyKidneys.length;
    numberOfUnhealthyKidneys = userKidneys.length - healthyKidneys.length;
  }

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.use(express.json());

//  User can add a new kidney
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  for (const user of users) {
    user.kidneys.push({
      healthy: isHealthy,
    });
  }

  res.send("Posted successfully");
});

// User can replace a kidney, make it healthy
app.put("/", (req, res) => {
  for (const user of users) {
    const kidneys = user.kidneys;
    for (const kidney of kidneys) {
      kidney.healthy = true;
    }
  }

  res.send("Updated successfully");
});

// User can remove all unhealthy kidney
app.delete("/", (req, res) => {
  for (const user of users) {
    const healthyKidneys = user.kidneys.filter(
      (kidney) => kidney.healthy === true
    );
    user.kidneys = healthyKidneys;
  }

  res.send("Removed all unhealthy kidneys");
});

app.listen(3000);
