import { PrismaClient } from '@prisma/client';
import inspect from './lib/inspect.js';
const
  prisma = new PrismaClient();

inspect(await prisma.user.findMany({
  take: 2,
  include: {posts:{take:2}}
}));
