/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const repoRoot = fileURLToPath(new URL("../..", import.meta.url));

export default defineConfig({
  plugins: [react()],
  // Role layouts and module frontends live outside apps/web; let Vite serve them.
  server: {
    fs: { allow: [repoRoot] },
    // Local API during development; in production nginx proxies /api/ to the API container.
    proxy: { "/api": { target: process.env.EOS_API_TARGET ?? "http://127.0.0.1:8000", changeOrigin: true } },
  },
  test: {
    globals: true,
    environment: "jsdom",
    include: ["tests/**/*.test.{ts,tsx}"],
  },
});
