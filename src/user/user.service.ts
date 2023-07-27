import { Injectable } from '@nestjs/common';
import { User } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findUserById(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async createUser(name: string): Promise<User> {
    return this.prisma.user.create({
      data: {
        name,
      },
    });
  }

//   async deleteUser(id: number): Promise<void> {
//     return this.prisma.user.delete({
//       where: { id },
//     });
//   }
}
