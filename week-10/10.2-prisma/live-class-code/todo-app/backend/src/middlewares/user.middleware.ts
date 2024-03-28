import express, { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import * as User from "../model/user.model";

declare global {
  namespace Express {
    interface Request {
      userId: number;
      name: string;
    }
  }
}

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies["token"];

  if (!token) {
    return res.status(401).json({ message: "Not authenticated!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.userId = (decoded as JwtPayload).userId;
    req.name = (decoded as JwtPayload).name;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authenticated!" });
  }
};
