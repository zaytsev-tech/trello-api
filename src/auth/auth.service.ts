import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/entities/user/user.service';
import { compareSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isMismatchPasswords = !compareSync(pass, user.password);

    if (isMismatchPasswords) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.email };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
