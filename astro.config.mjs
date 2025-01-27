import { defineConfig } from 'astro/config';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 8080
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});