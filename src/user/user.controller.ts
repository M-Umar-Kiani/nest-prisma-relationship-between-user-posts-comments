import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findUserById(id);
  }

  @Post()
  async create(@Body() userData: { name: string }): Promise<User> {
    return this.userService.createUser(userData.name);
  }

//   @Delete(':id')
//   async remove(@Param('id') id: number): Promise<void> {
//     return this.userService.deleteUser(id);
//   }
}
