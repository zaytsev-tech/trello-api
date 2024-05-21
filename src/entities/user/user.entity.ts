import {
  Column as NestColumn,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Comment } from '../comment/comment.entity';
import { Column } from '../column/column.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Column, (column) => column.author, { onDelete: 'CASCADE' })
  columns: Column[];

  @OneToMany(() => Comment, (comment) => comment.author)
  comments: Comment[];

  @NestColumn({ name: 'email', type: 'varchar' })
  email: string;

  @NestColumn({ name: 'password', type: 'varchar' })
  password: string;

  @NestColumn({ name: 'first_name', type: 'varchar' })
  firstName: string;

  @NestColumn({ name: 'last_name', type: 'varchar' })
  lastName: string;

  @NestColumn({ name: 'birth_date', type: 'timestamp', nullable: true })
  birthDate: Date;
}
