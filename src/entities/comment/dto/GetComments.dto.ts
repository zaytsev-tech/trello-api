import { IsNumber } from 'class-validator';

export class GetCommentsDto {
  @IsNumber()
  cardId: number;
}
