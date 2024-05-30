import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';

import { genSaltSync, hashSync } from 'bcrypt';

const AVAILABLE_FIELDS = ['email', 'firstName', 'lastName', 'birthDate'];

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getAllUsers() {
    return await this.userRepository.find({
      select: AVAILABLE_FIELDS as any,
    });
  }

  async getUserById(id: number) {
    const findedUser = await this.userRepository.findOne({
      where: { id },
      select: AVAILABLE_FIELDS as any,
    });

    if (!findedUser) {
      throw new BadRequestException('User not found');
    }

    return findedUser;
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email },
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
