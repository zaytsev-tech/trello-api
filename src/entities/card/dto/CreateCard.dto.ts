import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCardDto {
  @ApiProperty()
  @IsNumber()
  columnId: number;

  @ApiProperty()
  @IsString()
  title: string;
}
