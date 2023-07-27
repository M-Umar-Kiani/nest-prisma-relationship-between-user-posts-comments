import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Comment } from '.prisma/client';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async findAllComments(): Promise<Comment[]> {
    return this.prisma.comment.findMany();
  }

  async findCommentById(id: number): Promise<Comment> {
    return this.prisma.comment.findUnique({
      where: { id },
    });
  }

  async createComment(commentData: { content: string; postId: number }): Promise<Comment> {
    const { content, postId } = commentData;
    return this.prisma.comment.create({
      data: {
        content,
        postId,
      },
    });
  }

//   async deleteComment(id: number): Promise<void> {
//     return this.prisma.comment.delete({
//       where: { id },
//     });
//   }
}
