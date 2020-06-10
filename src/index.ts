import { PrismaClient } from '@prisma/client';
import Koa from 'koa';

const app = new Koa();
const prisma = new PrismaClient();

app.use(async (ctx: any) => {
  ctx.body = 'Hello World';
});

app.listen(process.env.PORT ?? 3000);
