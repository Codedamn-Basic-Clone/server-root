import expressLoader from "./express";
import connectDB from "./mongoDB";
import type { Express } from "express";

export default async function ({ app }: { app: Express }) {
  await connectDB();
  console.log("MongoDB loaded");
  await expressLoader({ app });
  console.log("Express loaded");
}
