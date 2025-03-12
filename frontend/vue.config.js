module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://league_api:3000',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
};
