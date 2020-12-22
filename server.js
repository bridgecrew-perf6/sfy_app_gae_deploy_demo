const dotenv = require("dotenv");
// import "isomorphic-fetch";
const Koa = require("koa");
const next = require("next");
const Router = require("@koa/router");

const { dbConnect } = require("./dbConnect");
const knex = dbConnect();

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 8080; //GAE runs on port 8080
const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get("/test", async (ctx) => {
    try {
      const body = await knex.select("demo_txt").from("demo_tbl");
      ctx.body = body;
      ctx.status = 200;
    } catch (error) {
      console.error(error);
      ctx.status = 500;
    }
  });

  router.get("/t2", async (ctx) => {
    ctx.body = { test: "t2 test result" };
    ctx.status = 200;
  });

  router.get("(.*)", async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });

  server.use(router.allowedMethods());
  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
