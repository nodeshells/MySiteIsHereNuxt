// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyC3APkv0SSzXrNF7As3BqDtBfDzTzUcN4U',
  authDomain: 'mysiteishere-nuxt.firebaseapp.com',
  projectId: 'mysiteishere-nuxt',
  storageBucket: 'mysiteishere-nuxt.appspot.com',
  messagingSenderId: '575745537141',
  appId: '1:575745537141:web:d2f874bb4578092653b43c',
  measurementId: 'G-5CDBSV0B0W',
};

export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      FIREBASE_CONFIG,
    },
  },
  app: {
    head: {
      title: 'MySite Is Here!',
      htmlAttrs: { lang: 'ja' },
      meta: [{ name: 'description', content: 'My site is here!!'}],
    },
  },
  modules: ['@nuxtjs/ionic', 'nuxt-vitest', '@nuxtjs/tailwindcss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  imports: {
    dirs: ['composables/**/*', 'utils/**/*'],
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
