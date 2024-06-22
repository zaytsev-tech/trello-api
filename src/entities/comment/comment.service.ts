import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { Card } from '../card/card.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  getCommentsByCardId(cardId: number) {
    return this.commentRepository.findOne({ where: { id: cardId } });
  }

  createComment(authorId: number, cardId: number, text: string) {
    const card = this.cardRepository.findOne({ where: { id: cardId } });

    if (!card) {
      throw new BadRequestException('Card is not found');
    }

    return this.commentRepository.save({
      text,
      author: { id: authorId },
      card: { id: cardId },
    });
  }
}
