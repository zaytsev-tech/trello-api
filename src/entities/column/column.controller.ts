import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ColumnService } from './column.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateColumnDto } from './dto/CreateColumn.dto';
import { Request, Response } from 'express';
import { User } from '../user/user.entity';
import { UpdateColumnDto } from './dto/UpdateColumn.dto';
import { AuthorGuard } from '../../guards/author.guard';

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

  @Get('/')
  async getColumns() {
    return await this.columnService.getColumns();
  }

  @Get('/:id')
  async getColumnById(@Param() params: { id: string }) {
    return await this.columnService.getColumnById(params.id);
  }

  @Post('/:id')
  @UseGuards(AuthorGuard)
  async updateColumn(
    @Body() body: UpdateColumnDto,
    @Param() params: { id: string },
  ) {
    return await this.columnService.updateColumn(params.id, { ...body });
  }

  @Delete('/:id')
  @UseGuards(AuthorGuard)
  async deleteColumn(@Param() params: { id: string }) {
    return await this.columnService.deleteColumn(params.id);
  }
}
