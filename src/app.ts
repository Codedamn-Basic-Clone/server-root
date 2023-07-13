import express from "express";
import { NODE_ENV } from "./config";

async function startServer() {
  const app = express();
  (await import("./loaders")).default({ app });
  const PORT = NODE_ENV.port;
  if (!PORT) {
    throw new Error("Port is not defined");
  }
  app
    .listen(NODE_ENV.port, () => {
      console.log(`Server is running on port ${NODE_ENV.port}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit(1);
    });
}

startServer();
