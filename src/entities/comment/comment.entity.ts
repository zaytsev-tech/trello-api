import {
  Entity,
  PrimaryGeneratedColumn,
  Column as NestColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Card } from '../card/card.entity';
import { User } from '../user/user.entity';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @NestColumn({ name: 'text', type: 'varchar' })
  text: string;

  @ManyToOne(() => Card, (card) => card.comments)
  @JoinColumn({ name: 'card_id' })
  card: Card;

  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn({ name: 'author_id' })
  author: User;
}
