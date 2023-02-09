// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-graphql-client',
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    public: {
      GQL_HOST: 'http://localhost:1337/graphql'
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
