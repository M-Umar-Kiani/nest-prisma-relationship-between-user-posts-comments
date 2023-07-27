import { Injectable } from '@nestjs/common';
import { Posts } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async findAllPosts(): Promise<Posts[]> {
    return this.prisma.posts.findMany({
      include: { author: true, comments: true },
    });
  }

  async findPostById(id: number): Promise<Posts> {
    return this.prisma.posts.findUnique({
      where: { id },
      include: { author: true, comments: true },
    });
  }

  async createPost(postData: { title: string; content: string; authorId: number }): Promise<Posts> {
    const { title, content, authorId } = postData;
    return this.prisma.posts.create({
      data: {
        title,
        content,
        authorId,
      },
      include: { author: true },
    });
  }

//   async deletePost(id: number): Promise<void> {
//     return this.prisma.post.delete({
//       where: { id },
//     });
//   }
}
