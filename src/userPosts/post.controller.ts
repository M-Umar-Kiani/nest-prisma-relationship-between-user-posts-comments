import { Controller, Get, Body, Param, Post } from '@nestjs/common';
import { Posts } from '@prisma/client'
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async findAll(): Promise<Posts[]> {
    return this.postService.findAllPosts();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Posts> {
    return this.postService.findPostById(id);
  }

  @Post()
  async create(@Body() postData: { title: string; content: string; authorId: number }): Promise<Posts> {
    return this.postService.createPost(postData);
  }

//   @Delete(':id')
//   async remove(@Param('id') id: number): Promise<void> {
//     return this.postService.deletePost(id);
//   }
}
