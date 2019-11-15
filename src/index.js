// for chainWebpack
module.exports = function(config, options) {
  config.module
    .rule('vue')
    .use('vue-filename-injector')
    .loader(require.resolve('./lib/injector.js'))
    .options(options)
    .after('vue-loader')
    .end()
}
