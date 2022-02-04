import _ from "lodash"
const StatsPlugin = require("stats-webpack-plugin")
const webpack = require("webpack")

export default {
  globalName: "subapp",
  globals: {
    id: (globalName) => `__subapp`,
    nuxt: (globalName) => `$${globalName}`,
    context: (globalName) => `__${globalName.toUpperCase()}__`,
    pluginPrefix: (globalName) => globalName,
    readyCallback: (globalName) => `on${_.capitalize(globalName)}Ready`,
    loadedCallback: (globalName) => `_on${_.capitalize(globalName)}Loaded`,
  },
  mode: "spa",
  /*
   ** Headers of the page
   */
  router: {
    mode: "hash",
  },

  buildModules: ["@nuxtjs/eslint-module"],
  /*
   ** Nuxt.js modules
   */
  MFE: {
    force: true,

    path: "./mfe.js",
    output: {
      library: `subapp`,
      libraryTarget: "umd"
    },
  },
  modules: ["@femessage/nuxt-micro-frontend", "@nuxtjs/axios"],
  /*
   ** Build configuration
   */

  build: {
    /*
     ** You can extend webpack config here
     */
    minimize: false,
    minimizer: [
      // terser-webpack-plugin
      // optimize-css-assets-webpack-plugin
    ],
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
    extractCSS: false,
    optimization: {
      splitChunks: {
        chunks: "async",
        maxAsyncRequests: 1,
        maxInitialRequests: 1,
      },
      runtimeChunk: false,
    },

    splitChunks: {
      chunks: "async",
      maxAsyncRequests: 1,
      maxInitialRequests: 1,
      automaticNameDelimiter: ".",
      name: false,
      cacheGroups: {
        default: false,
      },
      pages: false,
      vendor: false,
      commons: false,
      runtime: false,
      layouts: false,
    },
    filenames: {
      app: "subapp.js",
    },
    extend(config, { isDev, isClient }) {

      config.plugins.push(
        new StatsPlugin("manifest.json", {
          chunkModules: false,
          entrypoints: true,
          source: false,
          chunks: false,
          modules: false,
          assets: false,
          children: false,
          exclude: [/node_modules/],
        })
      )
    },
  },
}
