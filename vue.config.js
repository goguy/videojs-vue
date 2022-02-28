module.exports = {
  configureWebpack: {
    devtool:'source-map',
  },
  transpileDependencies: [
    'vuetify'
  ],
  runtimeCompiler: true,
}
