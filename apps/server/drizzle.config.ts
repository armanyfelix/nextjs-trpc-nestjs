import type { Config } from 'drizzle-kit'
import * as dotenv from 'dotenv'
dotenv.config()

export default {
  schema: './src/drizzle/schema.ts',
  out: './database',
  driver: 'mysql2',
  breakpoints: true,
  dbCredentials: {
    connectionString: process.env.MYSQL_URL as string,
  },
} satisfies Config
