import { Module } from '@nestjs/common';
import { TypeOrmModule as NestTypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/config.module';

@Module({
  imports: [
    ConfigModule,
    NestTypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: ['dist/entities/**/*.entity.js'],
      migrations: ['dist/db/migrations/**/*.js'],
      synchronize: true,
    }),
  ],
})
export class TypeOrmModule {}
