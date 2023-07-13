import type { Request, Response, NextFunction } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
  try {
    // throw new Error("Picklsdfsdfsu Testing");
    return res.status(200).json({ message: "Hello World" });
  } catch (error: any) {
    next(error);
    // console.log(error.message);
  }
}
