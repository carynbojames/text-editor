const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin'); /// added. Not needed?
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
      /// once built, there should be two JavaScript bundle files in the dist folder
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    
    devServer: {
      // The `hot` option is to use the webpack-dev-server in combination with the hot module replacement API.
      hot: 'only',
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Webpack Plugin'
      }),

      /// Not needed? 
      new WorkboxPlugin.GenerateSW({
        // these options encourage the ServiceWorkers to get in there fast
        // and not allow any straggling "old" SWs to hang around
        clientsClaim: true,
        skipWaiting: true,
      }),

      new InjectManifest({
        swScrc: './src-sw.js',
        swDest: './src-sw.js'
      }),

      new WebpackPwaManifest({
        name: 'Manifest',
        short_name: 'Manifest',
        description: 'Manifest Template',
        background_color: '#7eb4e2',
        theme_color: '#7eb4e2',
        start_url: './',
        publicPath: './',
      //   icons: [
      //     {
      //       src: path.resolve('assets/images/logo.png'),
      //       sizes: [96, 128, 192, 256, 384, 512],
      //       destination: path.join('assets', 'icons'),
      //     },
      //   ],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/i, /// $ - marks the end of the pattern we're matching; i - case insensitive 
          use: ['style-loader', 'css-loader'],
        },
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
};
