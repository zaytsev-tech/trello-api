import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CardService } from './card.service';
import { UpdateCardDto } from './dto/UpdateCard.dto';
import { CreateCardDto } from './dto/CreateCard.dto';
import { AuthorGuard } from 'src/guards/author.guard';
import { Request } from 'express';
import { User } from '../user/user.entity';

@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post('/')
  async createCard(@Body() body: CreateCardDto, @Req() req: Request) {
    const userId = (req.user as User)?.id;
    return await this.cardService.createCard(userId, body.columnId, body.title);
  }

  @Post('/:id')
  @UseGuards(AuthorGuard)
  async updateCard(
    @Body() body: UpdateCardDto,
    @Param() params: { id: string },
  ) {
    const cardId = params.id;
    return await this.cardService.updateCard(cardId, body.title);
  }

  @Delete('/:id')
  @UseGuards(AuthorGuard)
  async deleteCard(@Param() params: { id: string }) {
    const cardId = params.id;
    return await this.cardService.deleteCard(cardId);
  }
}
