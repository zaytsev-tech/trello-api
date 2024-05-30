import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { ColumnService } from './column.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateColumnDto } from './dto/createColumn.dto';
import { Request, Response } from 'express';
import { User } from '../user/user.entity';

@Controller('columns')
export class ColumnController {
  constructor(private readonly columnService: ColumnService) {}

  @Post('/')
  @UseInterceptors(FileInterceptor(''))
  async createColumn(
    @Body() body: CreateColumnDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const userId = (req.user as User).id;

    await this.columnService.createColumn({ ...body, authorId: userId });
    return res.send({ status: 'ok' });
  }
}
