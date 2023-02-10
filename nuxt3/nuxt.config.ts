// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  modules: [
    'nuxt-graphql-client',
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    public: {
      GQL_HOST: 'http://127.0.0.1:1337/graphql'
    }
  },
  'graphql-client': {
    documentPaths: [
      './graphql',
      './graphql/queries',
      './graphql/mutations',
    ]
  }
})
