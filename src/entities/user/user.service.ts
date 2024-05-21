import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

const AVAILABLE_FIELDS = ['email', 'first_name', 'last_name', 'birth_date'];

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getAllUsers() {
    this.userRepository.find({
      select: AVAILABLE_FIELDS as any,
    });
  }
}
