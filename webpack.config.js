var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'App/www/js');
var APP_DIR = path.resolve(__dirname, 'App');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders: [
      {
        loader: "babel-loader",
        // Skip any files outside of your project's `src` directory
        include: APP_DIR,
        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,
        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      },
    ]
  },
};

module.exports = config;
