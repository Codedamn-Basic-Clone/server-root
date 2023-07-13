import type { Router as RouterType } from "express";
import { Router } from "express";
import {
  createSingleUser,
  deleteSingleUser,
  readAllUsers,
  readSingleUser,
  updateSingleUser,
} from "../../../controllers/v1/users";

export default function (app: RouterType) {
  const router = Router();

  app.use("/users", router);

  router.get("/all", readAllUsers);

  router.get("/:id", readSingleUser);
  router.patch("/:id", updateSingleUser);
  router.delete("/:id", deleteSingleUser);
  router.post("/:id", createSingleUser);

  return router;
}
