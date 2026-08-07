// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://divyam2356.github.io',
  base: '/PORTFOLIO',
  vite: {
    plugins: [tailwindcss()],
  },
});
