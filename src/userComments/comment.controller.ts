import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from '.prisma/client';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async findAll(): Promise<Comment[]> {
    return this.commentService.findAllComments();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Comment> {
    return this.commentService.findCommentById(id);
  }

  @Post()
  async create(@Body() commentData: { content: string; postId: number }): Promise<Comment> {
    return this.commentService.createComment(commentData);
  }

//   @Delete(':id')
//   async remove(@Param('id') id: number): Promise<void> {
//     return this.commentService.deleteComment(id);
//   }
}
