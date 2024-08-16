import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://userIdeas_owner:gptm1rjyqdx8@ep-steep-thunder-a5u0eygk.us-east-2.aws.neon.tech/userIdeas?sslmode=require"
);
export const db = drizzle(sql, { schema });
