const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.redirect('http://web.kuru-anime.com/');
  ctx.status = 301;
});

router.get('/hello', (ctx, next) => {
  ctx.body = 'Hello World';
});

router.get('/test', (ctx, next) => {
  ctx.body = 'test';
});

app.use(router.routes())
   .use(router.allowedMethods())
   .use(cors());

app.listen(process.env.PORT);
