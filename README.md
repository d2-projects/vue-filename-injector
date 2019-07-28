# Vue Filename Injector

Inject the file path of the `.vue` on `this.$options.__source`.

## Install

``` sh
yarn add @d2-projects/vue-filename-injector -D
```

or

``` sh
npm install @d2-projects/vue-filename-injector -D
```

## Usage

Only used for vue-cli3, `vue.config.js`:

``` js
const VueFilenameInjector = require('@d2-projects/vue-filename-injector')

module.exports = {

  chainWebpack: config => {
    // ...

    // in here, only with chainWebpack
    VueFilenameInjector(config, {
      propName: '__source' // default
    })

  }
}
```

## Relevant

https://github.com/neutrinojs/webpack-chain
https://vue-loader.vuejs.org/guide/custom-blocks.html
