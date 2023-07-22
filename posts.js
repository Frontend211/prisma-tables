import { PrismaClient } from '@prisma/client';
import inspect from './lib/inspect.js';

const
  prisma = new PrismaClient();

inspect(await prisma.post.findMany({
  take: 3,
  include: { author: true, categories:true }
}));
