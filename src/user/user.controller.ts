import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UserService, User } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): User {
    return this.userService.findById(+id);
  }

  @Post()
  crete(@Body() body: Omit<User, 'id'>): User {
    return this.userService.create(body);
  }
}
