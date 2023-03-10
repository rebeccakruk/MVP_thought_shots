const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ], transpileDependencies: true,
  configureWebpack: {
    devtool: `source-map`
  }
})