import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  @HttpCode(200)
  async getAllUsers() {
    const users = await this.userService.getAllUsers();
    return users;
  }

  @Get('/:id')
  @HttpCode(200)
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getUserById(id);
  }

  @Post('/')
  @UseInterceptors(FileInterceptor(''))
  async createUser(@Body() body: CreateUserDto, @Res() res: Response) {
    await this.userService.createUser(body);
    return res.send({ status: 'ok' });
  }
}
