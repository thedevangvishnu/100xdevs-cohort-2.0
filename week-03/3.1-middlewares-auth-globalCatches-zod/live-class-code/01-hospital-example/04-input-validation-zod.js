// Use the same hospital server example and use zod to do input validation for kidneys.
// kidneys is an array of numbers.

const express = require("express");
const app = express();
const zod = require("zod");

const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);

  if (!response.success) {
    res.status(411).json({ msg: "Invalid inputs" });
    return;
  }

  res.send({ response });
});

app.listen(3000);

/*
Write a zod schema for a user who has a username, a password and a country that is either IN or US

    const schema = zod.object({
        username: zod.string(),
        password: zod.string(),
        country: zod.literal("IN").or(zod.literal("US"))
    })
*/
