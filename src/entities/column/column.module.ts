import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Column } from './column.entity';
import { ColumnController } from './column.controller';
import { ColumnService } from './column.service';
import { User } from '../user/user.entity';
import { Card } from '../card/card.entity';
import { CardService } from '../card/card.service';

@Module({
  imports: [TypeOrmModule.forFeature([Column, User, Card])],
  controllers: [ColumnController],
  providers: [ColumnService, CardService],
})
export class ColumnModule {}
