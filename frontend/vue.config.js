module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://league_api:3000',  // Adresse de l'API dans Docker
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
