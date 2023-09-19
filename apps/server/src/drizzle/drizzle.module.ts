import { Module } from '@nestjs/common';
import { createPool } from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';

@Module({
  providers: [
    {
      provide: 'mysqlConnection',
      inject: [],
      useFactory: () => {
        const pool = createPool(process.env.DATABASE_URL);
        return drizzle(pool);
      },
    },
  ],
  exports: ['mysqlConnection'],
})
export class DrizzleModule {}
