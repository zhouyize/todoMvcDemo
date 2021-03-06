var path = require('path');
var webpack = require('webpack');
//var args = require('node-args');

var env = process.env.NODE_ENV;

var config = {
  entry: ['./index'],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  plugins: [
      new webpack.DefinePlugin({
          process: {
              env: {
                  NODE_ENV: JSON.stringify(process.env.NODE_ENV)
              }
          },
      }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: __dirname,
      loader: 'babel'
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }]
  }
};

// if (args.minify) {
//   config.plugins = config.plugins.concat(
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.optimize.OccurenceOrderPlugin()
//   );
// }

if (env === 'production') {
    config.plugins = config.plugins.concat(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    );
}

module.exports = config;