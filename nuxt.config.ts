// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    asyncContext: true
  },
  css: [
    '~/assets/scss/main.scss'
  ],
  devtools: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image", 'nuxt-graphql-client'],
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://wordpress-331866-3618714.cloudwaysapps.com/graphql',
    },
  },
  'graphql-client': {
    codegen: false
  }
})