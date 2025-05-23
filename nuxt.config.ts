// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/test-utils/module'],
  devtools: { enabled: false },
  compatibilityDate: '2024-11-01',
  vite: {
    server: {
      host: true,
      port: 3000,
      watch: {
        usePolling: true,
      },
    },
  },
})
