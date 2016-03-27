const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  resolve: {
    root: path.join(__dirname, 'source')
  },
  entry: [
    './source/client/index'
  ],
  output: {
    path: path.join(__dirname, 'build/lib'),
    filename: 'bundle.js',
    publicPath: '/static/lib'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'source')
    }]
  }
}
