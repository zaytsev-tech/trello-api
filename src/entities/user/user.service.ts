import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';

import { genSaltSync, hashSync } from 'bcrypt';

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

  async createUser(body: CreateUserDto) {
    const salt: string = genSaltSync(10);
    const newUser = {
      ...body,
      password: hashSync(body.password, salt),
    };

    return await this.userRepository.save(newUser);
  }
}
