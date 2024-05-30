import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Column } from './column.entity';
import { CreateColumnDto } from './dto/createColumn.dto';

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
}
