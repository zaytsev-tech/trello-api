import { IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsNumber()
  cardId: number;

  @IsString()
  text: string;
}
