import { defineConfig } from 'astro/config';

export default defineConfig({
  // 👉 Change this to your own domain before deploying
  site: 'https://subodhwani.xyz',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' }
});
