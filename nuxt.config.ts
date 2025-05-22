// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxt/test-utils/module'
  ],
  vite: {
    server: {
      host: true,
      port: 3000,
      watch: {
        usePolling: true,
      },
    },
  }
})
