module.exports = {
  configureWebpack: {
    devtool:'source-map',
  },
  transpileDependencies: [
    'vuetify'
  ],
  runtimeCompiler: true,
  base: '/videojs-vue/',
}
