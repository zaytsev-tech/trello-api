import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateCardDto {
  @ApiProperty()
  @IsString()
  title: string;
}
