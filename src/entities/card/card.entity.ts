import {
  Entity,
  PrimaryGeneratedColumn,
  Column as NestColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Column } from '../column/column.entity';
import { Comment } from '../comment/comment.entity';
import { User } from '../user/user.entity';

@Entity('cards')
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @NestColumn({ name: 'title', type: 'varchar' })
  title: string;

  @ManyToOne(() => User, (user) => user.cards)
  @JoinColumn({ name: 'author_id' })
  author: Column;

  @NestColumn({ nullable: true })
  author_id: number;

  @ManyToOne(() => Column, (column) => column.cards)
  @JoinColumn({ name: 'column_id' })
  column: Column;

  @NestColumn({ nullable: true })
  column_id: number;

  @OneToMany(() => Comment, (comment) => comment.card)
  comments: Comment[];
}
