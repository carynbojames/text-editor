const path = require('path'); // webpack
const HtmlWebpackPlugin = require('html-webpack-plugin') // webpack plugin html

module.exports = {
  
  // webpack
  mode: 'development',
  entry: './src/js/index.js', // default is the main.bundle.js; assigns the name even when it's not defined here
  output: {
    filename: '[name].bundle.js', /// [name] for multiple bundles; bundle convention means it includes more than JavaScript, e.g.CSS
    path: path.resolve(__dirname, 'dist'),
  },

  // dev-server hot module reloading (HMR)
  devServer: {
    // The `hot` option is to use the webpack-dev-server in combination with the hot module replacement API.
    hot: 'only',
  },

  // webpack plugin html
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Webpack Plugin'
    })
  ]
}