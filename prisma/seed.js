import { PrismaClient } from '@prisma/client';
function getRandom() {
  return ~~(10 * Math.random());
}
const
  prisma = new PrismaClient(),
  [jsphUsers, jsphPosts, jsphPhotos] = await Promise.all(['users', 'posts', 'photos'].map(s =>
    fetch(`https://jsonplaceholder.typicode.com/${s}`).then(resp => resp.json())));

for (const data of jsphPhotos.slice(0, 10).map(({ title }, id) => ({ id, title: title.split(' ')[0] })))
  await prisma.category.create({ data });

for (const { id, name, phone, email } of jsphUsers)
  await prisma.user.create({
    data: { id, name, phone, profile: { create: {email }} },
  });

for (const data of jsphPosts)
  await prisma.post.create({ data:{...data, categories:{connect:[{id:getRandom()},{id:getRandom()}] }}});


await prisma.$disconnect();