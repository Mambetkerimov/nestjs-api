import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './services/prisma.service';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, PostService, UserService],
})
export class AppModule {}
