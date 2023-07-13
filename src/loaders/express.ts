import express from "express";
import type { Express } from "express";
import helmet from "helmet";
import cors from "cors";
import { NODE_ENV } from "../config";
import morgan from "morgan";
import rootRouter from "../routes";
import { globalErrorHandler, notFound } from "../middlewares/errors";

export default async function ({ app }: { app: Express }) {
  //Health Check endpoints
  app.get("/status", (req, res) => {
    res.status(200).end();
  });
  app.head("/status", (req, res) => {
    res.status(200).end();
  });

  //Middleware
  app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(morgan(NODE_ENV.logs.morgan));

  //Routes
  app.use(`/`, await rootRouter(app));
  app.use(notFound);
  app.use(globalErrorHandler);
}
