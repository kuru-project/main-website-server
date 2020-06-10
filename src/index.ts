import { PrismaClient } from '@prisma/client';

const Koa = require('koa');
const app = new Koa();
const prisma = new PrismaClient();

app.use(async (ctx: any) => {
  ctx.body = 'Hello World';
});

app.listen(process.env.PORT ?? 3000);
