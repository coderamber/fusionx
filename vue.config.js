// eslint-disable-next-line @typescript-eslint/no-var-requires
const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.html$|\.css$/,
        filename: '[path].gz[query]',
        minRatio: 1,
        threshold: 10240,
        deleteOriginalAssets: false
      })
    ]
  },
  productionSourceMap: false
}
