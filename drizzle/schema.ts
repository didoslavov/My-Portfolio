import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const UsersTable = pgTable("guest-book", {
  id: serial("id").primaryKey(),
  user: text("user").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
