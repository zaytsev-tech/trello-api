import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { Card } from '../card/card.entity';
import { CardService } from '../card/card.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Card])],
  controllers: [CommentController],
  providers: [CommentService, CardService],
})
export class CommentModule {}
