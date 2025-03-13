import { hc } from "hono/client";
import type { API } from "@hono-monorepo-example/backend";

export const api = hc<API>("/");
