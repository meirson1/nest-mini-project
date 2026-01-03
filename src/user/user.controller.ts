import { Controller, Get, UseGuards } from '@nestjs/common';
import { jwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import type { User } from '@prisma/client';

@UseGuards(jwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
