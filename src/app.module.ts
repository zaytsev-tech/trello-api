import { Module } from '@nestjs/common';
import { ConfigModule } from './config.module';
import { UserModule } from './entities/user/user.module';
import { TypeOrmModule } from './db/typeorm.module';
import { PassportModule } from './passport.module';
import { AuthModule } from './auth/auth.module';
import { ColumnModule } from './entities/column/column.module';
import { CardModule } from './entities/card/card.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule,
    UserModule,
    PassportModule,
    AuthModule,
    ColumnModule,
    CardModule,
  ],
})
export class AppModule {}
