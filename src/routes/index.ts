import type { Router as RouterType } from "express";
import { Router } from "express";
import { API_VERSION } from "../config";

export default async function (app: RouterType) {
  const router = Router();
  app.use("/api", router);
  switch (API_VERSION) {
    case "v1": {
      return await import("./v1").then(({ default: v1 }) => v1(router));
    }
    default: {
      throw new Error(`API Version ${API_VERSION} is not supported`);
    }
  }
}
