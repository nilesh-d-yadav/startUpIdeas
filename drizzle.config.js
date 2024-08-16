/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://userIdeas_owner:gptm1rjyqdx8@ep-steep-thunder-a5u0eygk.us-east-2.aws.neon.tech/userIdeas?sslmode=require",
  },
};
// {
//   "dialect": "postgresql",
//   "out": "/migration-folder",
//   "schema": "/utils/schema.js",
//   "breakpoints": true,
//   "driver": "pg",
//   "dbCredentials": {
//     "url": "postgresql://userIdeas_owner:gptm1rjyqdx8@ep-steep-thunder-a5u0eygk.us-east-2.aws.neon.tech/userIdeas?sslmode=require"
//   }
// }
