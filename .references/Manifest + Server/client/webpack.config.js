// Errors, but runs. It pops up in the TODO application
// Seems to need a server to run. The manifest w/o the server folder validates that the manifest file is created in the dist folder

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');
const path = require('path');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Webpack Plugin',
      title: "Progressive Web Application"
    }),
    
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),

    // GenerateSW references the GenerateSW import above. The name doesn't have to be the same
    new GenerateSW(),
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

  ]
}