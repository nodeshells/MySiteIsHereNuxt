// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

const config = {
  public: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || '',
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || '',
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || '',
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL || '',
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET || '',
    FIREBASE_MESSAGING_SENDER_ID:
      process.env.FIREBASE_MESSAGING_SENDER_ID || '',
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID || '',
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID || '',
  },
};

export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: config,
  app: {
    head: {
      title: 'MySite Is Here!',
      meta: [{ name: 'description', content: 'My site is here!!' }],
    },
  },
  modules: ['@nuxtjs/ionic', 'nuxt-vitest', '@nuxtjs/tailwindcss'],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  imports: {
    dirs: ['composables/**/*', 'utils/**/*', 'plugins/**/*'],
  },
  css: ['~/assets/css/ionic.css'],
  ionic: {
    integrations: {
      pwa: false,
    },
  },
  tailwindcss: {
    exposeConfig: true,
  },
  devtools: { enabled: false },
});
