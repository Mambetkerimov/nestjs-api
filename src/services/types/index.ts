import { Prisma } from '@prisma/client';

export type GetParams = {
  skip?: number;
  take?: number;
  cursor?: Prisma.PostWhereUniqueInput;
  where?: Prisma.PostWhereInput;
  orderBy?: Prisma.PostOrderByWithRelationInput;
};

export type UserData = {
  email: string;
  name?: string;
};

export type PostData = {
  title: string;
  content?: string;
  authorEmail: string;
};
