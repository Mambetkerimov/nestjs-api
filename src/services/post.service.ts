import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Post, Prisma } from '@prisma/client';
import { GetParams } from './types';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getPost(where: Prisma.PostWhereUniqueInput): Promise<Post | null> {
    return this.prisma.post.findUnique({ where });
  }

  async getPosts(params: GetParams): Promise<Post[]> {
    const { skip, take, where, orderBy, cursor } = params;
    return this.prisma.post.findMany({ skip, take, where, orderBy, cursor });
  }

  async createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({ data });
  }

  async updatePost(params: {
    data: Prisma.PostUpdateInput;
    where: Prisma.PostWhereUniqueInput;
  }): Promise<Post> {
    const { data, where } = params;
    return this.prisma.post.update({ data, where });
  }

  async removePost(where: Prisma.PostWhereUniqueInput): Promise<Post> {
    return this.prisma.post.delete({ where });
  }
}
