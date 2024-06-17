import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { Column } from '../column/column.entity';
import { User } from '../user/user.entity';
import { ColumnService } from '../column/column.service';

@Module({
  imports: [TypeOrmModule.forFeature([Column, User, Card])],
  controllers: [CardController],
  providers: [CardService, ColumnService],
})
export class CardModule {}
