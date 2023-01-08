const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = () => {
    return {
      mode: 'development',
      entry: {
        main: './src/js/index.js',
      },
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './index.html',
          title: 'Manifest'
        }),

        new WorkboxPlugin.GenerateSW({
          clientsClaim: true,
          skipWaiting: true,
    }),
  
        new GenerateSW(),
        new WebpackPwaManifest({
          // TODO: Create a manifest.json:
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
    }
}