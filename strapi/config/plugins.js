// path: ./config/plugins.js

module.exports = {
    //
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: true,
        depthLimit: 1000,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
  };
   