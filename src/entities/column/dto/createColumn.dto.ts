import { IsString, MinLength } from 'class-validator';
import { Card } from 'src/entities/card/card.entity';

export class CreateColumnDto {
  @IsString()
  @MinLength(1)
  title: string;

  cards: Card[];

  authorId: number;
}
