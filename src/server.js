import { Hono } from "hono";
const app = new Hono();

app.get("/public/*", async (ctx) => {
    return await ctx.env.ASSETS.fetch(ctx.req.raw);
});

app.get("/", (ctx) => ctx.text("Hello world, this is Hono!! TEST"));

export default app;