import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => User, (user) => user.chats)
  @JoinTable()
  users: User[];
}
