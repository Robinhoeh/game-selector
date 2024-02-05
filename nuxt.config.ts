// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: { 
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/test-utils/module'
    // https://google-fonts.nuxtjs.org/getting-started/setup
  ]
})
