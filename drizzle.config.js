import "./drizzle/envConfig";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./drizzle/schema.ts",
  driver: "pg",

  dbCredentials: {
    connectionString: process.env.POSTGRES_URL,
    url: process.env.POSTGRES_URL,
  },
});
