import { Module } from '@nestjs/common';
import { ConfigModule } from './config.module';
import { UserModule } from './entities/user/user.module';
import { TypeOrmModule } from './db/typeorm.module';
import { PassportModule } from './passport.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule,
    UserModule,
    PassportModule,
    AuthModule,
  ],
})
export class AppModule {}
