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
      title: 'Webpack Plugin'
    })
  ],

// Babel
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
  ],
  },
};