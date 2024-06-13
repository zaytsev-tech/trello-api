import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Column } from './column.entity';
import { ColumnController } from './column.controller';
import { ColumnService } from './column.service';
import { User } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Column, User])],
  controllers: [ColumnController],
  providers: [ColumnService],
})
export class ColumnModule {}
