import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Column } from '../column/column.entity';
import { Card } from '../card/card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Column, User, Card])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
