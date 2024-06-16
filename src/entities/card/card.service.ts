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

  async createCard(columnId: number, title: string) {
    const newCard = await this.cardRepository.create({
      title,
      column_id: columnId,
    });

    return await this.cardRepository.save(newCard);
  }

  async updateCard(cardId: string, title: string) {
    const findedCard = await this.cardRepository.findBy({ id: Number(cardId) });

    if (!findedCard) {
      throw new BadRequestException('Card not found');
    }

    return await this.cardRepository.update(cardId, { ...findedCard, title });
  }
}
