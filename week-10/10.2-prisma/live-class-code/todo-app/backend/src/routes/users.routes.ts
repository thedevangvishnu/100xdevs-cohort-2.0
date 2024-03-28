// Create routes for user to sign up, login and logout

import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import * as User from "../model/user.model";
import { verifyUser } from "../middlewares/user.middleware";

const router = express.Router();

router.post(
  "/register",
  [
    check("firstName", "Firstname is required!").isString(),
    check("lastName", "Lastname is required!").isString(),
    check("email", "Email is required!").isEmail(),
    check("password", "Password is required!").isString(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    let { firstName, lastName, email, password } = req.body;
    try {
      const user = await User.getUser(email);

      if (user) {
        return res.status(400).json({ message: "User already exists!" });
      }

      password = await bcrypt.hash(password, 10);

      const newUser = await User.createUser({
        firstName,
        lastName,
        email,
        password,
      });
      const userId = newUser.id;

      const token = jwt.sign(
        { userId, name: firstName },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "1d",
        }
      );

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 24 * 60 * 60 * 1000,
      });

      return res.status(201).json({ message: "Register successfull!", userId });
    } catch (error) {
      console.log("Error from route", error);
      return res.status(500).json({ message: "Something went wrong" });
    }
  }
);

router.post(
  "/login",
  [
    check("email", "Email is required!").isEmail(),
    check("password", "Password is required!").isString(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    let { email, password } = req.body;
    try {
      const user = await User.getUser(email);

      if (!user) {
        return res.status(400).json({ message: "Invalid credentials!" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials!" });
      }

      const userId = user.id;
      const firstName = user.firstName;

      const token = jwt.sign(
        { userId, name: firstName },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "1d",
        }
      );

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 24 * 60 * 60 * 1000,
      });

      return res.status(201).json({ message: "Login successfull!", userId });
    } catch (error) {
      console.log("Error from route", error);
      return res.status(500).json({ message: "Something went wrong!" });
    }
  }
);

router.get("/validate-token", verifyUser, (req: Request, res: Response) => {
  return res.status(200).json({ userId: req.userId, name: req.name });
});

export default router;
