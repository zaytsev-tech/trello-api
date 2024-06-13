import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Column } from './column.entity';
import { CreateColumnDto } from './dto/createColumn.dto';
import { UpdateColumnDto } from './dto/updateColumn.dto';

@Injectable()
export class ColumnService {
  constructor(
    @InjectRepository(Column)
    private readonly columnRepository: Repository<Column>,
  ) {}

  async createColumn(columnData: CreateColumnDto) {
    const newCol = await this.columnRepository.create({
      ...columnData,
      author: {
        id: columnData.authorId,
      },
    });

    return await this.columnRepository.save(newCol);
  }

  async getColumns() {
    return await this.columnRepository.find();
  }

  async getColumnById(id: string) {
    const findedColumn = await this.columnRepository.findOne({
      where: { id: Number(id) },
    });

    if (!findedColumn) {
      throw new BadRequestException('Column not found');
    }

    return findedColumn;
  }

  async updateColumn(id: string, body: UpdateColumnDto) {
    return this.columnRepository.update(id, body);
  }
}
