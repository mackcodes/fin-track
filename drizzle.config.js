// import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './utils/schema.jsx',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:NDYVkL4HPJ3n@ep-fragrant-lab-a50e67yy.us-east-2.aws.neon.tech/neondb?sslmode=require'
  },
});


// export default {
//     schema: "./utils/schema.jsx",
//     driver: 'pg',
//     dbCredentials: {
//         connectionString: 'postgresql://neondb_owner:LuoOv60BTsYU@ep-summer-frog-a58fjl68.us-east-2.aws.neon.tech/Expenses-Tracker?sslmode=require',
//     }
// };