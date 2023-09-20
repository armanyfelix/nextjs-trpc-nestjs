import type { Config } from 'drizzle-kit'
// import { databaseURL } from './constants/db';

export default {
  schema: './src/drizzle/schema.ts',
  out: './drizzle',
  driver: 'mysql2',
  dbCredentials: {
    connectionString: process.env.MYSQL_URL,
  },
} satisfies Config
