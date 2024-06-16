import { Body, Controller, Param, Post } from '@nestjs/common';
import { CardService } from './card.service';
import { UpdateCardDto } from './dto/UpdateCard.dto';
import { CreateCardDto } from './dto/CreateCard.dto';

@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post('/')
  async createCard(@Body() body: CreateCardDto) {
    return await this.cardService.createCard(body.columnId, body.title);
  }

  @Post('/:id')
  async updateCard(
    @Body() body: UpdateCardDto,
    @Param() params: { id: string },
  ) {
    const cardId = params.id;
    return await this.cardService.updateCard(cardId, body.title);
  }
}
