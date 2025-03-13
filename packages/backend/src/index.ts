import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono()
    .get("/", (c) => {
        return c.text("Hello Hono!");
    })
    .get("/count", (c) => {
        return c.json(69);
    });

export type API = typeof app;

serve(
    {
        fetch: app.fetch,
        port: 3000,
    },
    (info) => {
        console.log(`Server is running on http://localhost:${info.port}`);
    }
);
