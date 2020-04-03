import Koa from 'koa';
import "reflect-metadata";

const app = new Koa();

app.use(async (ctx: any) => {
  ctx.body = 'Hello World';
});

app.listen(process.env.PORT);
