const Keyv = require('keyv')
const { KeyvAdapter } = require('@apollo/utils.keyvadapter')

module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: true,
        cache: new KeyvAdapter(
          new Keyv(env('REDIS_URI', 'redis://localhost:6379'))
        ),
      },
    },
  },
});
