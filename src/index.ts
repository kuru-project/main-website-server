import Koa from 'koa';

const app = new Koa();

app.use(async (ctx: any) => {
  ctx.body = 'Hello World';
});

app.listen(process.env.PORT ?? 3000);
