import { ConnectOptions, connect } from "mongoose";
import { DB_ENV } from "../config";

export default async function () {
  if (!DB_ENV.url) throw new Error("MongoDB URL is not defined");
  if (!DB_ENV.name) throw new Error("MongoDB name is not defined");

  const db = await connect(DB_ENV.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: DB_ENV.name,
  } as ConnectOptions);
}
