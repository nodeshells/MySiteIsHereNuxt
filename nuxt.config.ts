// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
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
    dirs: ['composables/**', 'utils/**'],
  },
  css: ['~/assets/css/ionic.css'],
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true,
  },
  devtools: { enabled: false },
});
