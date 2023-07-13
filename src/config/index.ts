import dotenv from "dotenv";

const envContent = dotenv.config();

if (envContent.error) {
  throw new Error("Couldn't find .env file");
}

export const DB_ENV = {
  url: process.env.MONGODB_DATABASE_URI,
  name: process.env.MONGODB_DATABASE_NAME,
};

export const NODE_ENV = {
  port: process.env.PORT && parseInt(process.env.PORT, 10),
  logs: {
    morgan: process.env.MORGAN || "dev",
  },
};
