import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './userPosts/post.module';
import { CommentModule } from './userComments/comment.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UserModule, PostModule, CommentModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
