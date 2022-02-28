module.exports = {
  configureWebpack: {
    devtool:'source-map',
  },
  transpileDependencies: [
    'vuetify'
  ],
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/videojs-vue/'
    : '/'
}
