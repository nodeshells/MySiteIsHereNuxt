import { defineVitestConfig } from 'nuxt-vitest/config';
import Vue from '@vitejs/plugin-vue';

export default defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
  plugins: [Vue()],
});
