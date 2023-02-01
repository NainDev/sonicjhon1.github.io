import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

export default defineConfig({
  site: 'https://sonicj.pages.dev',
  base: '/',
  build: {
    // Generate `page.html` instead of `page/index.html` during build.
    format: 'file'
  },
  integrations: [tailwind(), compress()],
  output: 'static',
  server: {
    port: 3000,
    host: true
  }
});