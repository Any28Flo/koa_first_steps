const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');

const app = new Koa();

const router = new Router();
const PORT = process.env.PORT || 3000
router.get('/' , async (ctx) =>{
    ctx.body = "Hello world"
});
//Logging
app.use(Logger());
//Add routes and response to the OPTIONS request
app.use(router.routes()).use(router.allowedMethods);
app.listen(PORT, () =>{
    console.log(`🚀 Server running on ${PORT}`)
})
