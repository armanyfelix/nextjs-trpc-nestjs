import type { Config } from 'drizzle-kit';

export default {
  schema: './src/drizzle/schema.ts',
  out: './drizzle',
  driver: 'mysql2',
  dbCredentials: {
    connectionString:
      'mysql://root:zZCtEMgHtok17HGi1QQR@containers-us-west-74.railway.app:7656/railway',
  },
} satisfies Config;
