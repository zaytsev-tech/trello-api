import { BadRequestException, Injectable } from '@nestjs/common';
import { Card } from './card.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  async createCard(userId: number, columnId: number, title: string) {
    const newCard = await this.cardRepository.create({
      title,
      column_id: columnId,
      author: {
        id: userId,
      },
    });

    return await this.cardRepository.save(newCard);
  }

  async updateCard(cardId: string, title: string) {
    return await this.cardRepository.update(cardId, { title });
  }

  async deleteCard(cardId: string) {
    return await this.cardRepository.delete(cardId);
  }

  async getCardById(cardId: string) {
    return await this.cardRepository.findOne({ where: { id: Number(cardId) } });
  }
}
