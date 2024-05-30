import {
  Entity,
  PrimaryGeneratedColumn,
  Column as NestColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Card } from '../card/card.entity';
import { User } from '../user/user.entity';

@Entity('columns')
export class Column {
  @PrimaryGeneratedColumn()
  id: number;

  @NestColumn({ name: 'title', type: 'varchar' })
  title: string;

  @ManyToOne(() => User, (user) => user.columns)
  @JoinColumn({ name: 'author_id' })
  author: User;

  @OneToMany(() => Card, (card) => card.column, { onDelete: 'CASCADE' })
  cards: Card[];
}
