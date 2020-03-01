const loaderPath = require.resolve('./lib/injector.js')

// for chainWebpack
module.exports = function(config, options) {
  config.module
    .rule('vue')
    .use('vue-filename-injector')
    .loader(loaderPath)
    .options(options)
    .after('vue-loader')
    .end()
}
