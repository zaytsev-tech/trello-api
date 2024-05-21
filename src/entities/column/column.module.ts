import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Column } from './column.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Column])],
})
export class ColumnModule {}
