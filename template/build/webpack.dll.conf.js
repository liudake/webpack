const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    vendor: ['vue-router', 'vuex', 'axios', 'qs']
  },
  output: {
    path: path.join(__dirname, '../static/js'),
    filename: '[name].dll.js',
    //  这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致。
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library',
      // 执行的上下文环境，对之后DllReferencePlugin有用
      context: __dirname
    }),
    // 压缩打包的文件，与该文章主线无关
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
