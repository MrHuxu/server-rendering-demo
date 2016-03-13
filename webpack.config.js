var path    = require('path');

module.exports = {
  entry: [
    './client' // Your appʼs entry point
  ],

  publicPath : '/assets/',

  output: {
    path: path.join(__dirname, 'public', 'built'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:6789/assets/'
  },

  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json']
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
}