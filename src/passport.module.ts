import { Module } from '@nestjs/common';
import { PassportModule as NestPassportModule } from '@nestjs/passport';

@Module({
  imports: [
    NestPassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
})
export class PassportModule {}
