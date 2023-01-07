const path = require('path'); // webpack
const HtmlWebpackPlugin = require('html-webpack-plugin') // webpack plugin html

module.exports = {
    // webpack
    mode: 'development',
    entry: {main: './src/js/index.js'},
    output: {
      filename: '[name].bundle.js', /// [name] for multiple bundles; bundle convention means it includes more than JavaScript, e.g.CSS
      path: path.resolve(__dirname, 'dist'),
    },
  
    // webpack plugin html
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'CSS Loader'
      })
    ],

  // CSS Loader
  module: {
    rules: [
      {
        test: /\.css$/i, /// $ - marks the end of the pattern we're matching; i - case insensitive 
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}