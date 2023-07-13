import type { Router as RouterType } from "express";
import { Router } from "express";
import usersRouter from "./users";

export default function (app: RouterType) {
  const router = Router();
  app.use(`/v1`, router);

  usersRouter(router);
  return router;
}
