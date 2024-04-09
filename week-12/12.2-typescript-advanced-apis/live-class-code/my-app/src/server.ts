import { z } from "zod";
import express, { Request, Response } from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z
    .number()
    .min(18, { message: "You must be at least 18 years old" })
    .optional(),
});

type UserProfileType = z.infer<typeof userProfileSchema>;

app.put("/user", (req: Request, res: Response) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: UserProfileType = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return;
  }
  // update database here
  res.json({
    message: "User updated",
  });
});

app.listen(3000);
