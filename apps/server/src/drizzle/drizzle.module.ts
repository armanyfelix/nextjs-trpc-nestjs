import { Module } from '@nestjs/common';
import { createPool } from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';

@Module({
  providers: [
    {
      provide: 'mysqlConnection',
      inject: [],
      useFactory: () => {
        const pool = createPool(
          'mysql://root:zZCtEMgHtok17HGi1QQR@containers-us-west-74.railway.app:7656/railway' as string,
        );
        return drizzle(pool);
      },
    },
  ],
  exports: ['mysqlConnection'],
})
export class DrizzleModule {}
