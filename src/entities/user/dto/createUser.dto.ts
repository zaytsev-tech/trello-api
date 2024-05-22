import {
  IsEmail,
  IsISO8601,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6, {
    message: 'Password must have more than 6 symbols',
  })
  password: string;

  @IsString()
  @MinLength(1)
  firstName: string;

  @IsString()
  @MinLength(1)
  lastName: string;

  @IsISO8601()
  @IsOptional()
  birthDate: Date;
}
