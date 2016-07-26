const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  target: 'web',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Praline'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.scss', '.css'],
    packageMains: ['browser', 'web', 'browserify', 'main', 'style'],
  },
  module: {
    preLoaders: [{
      test: /\.js?$/,
      loader: 'standard',
      exclude: /(node_modules|dist)/
    }],
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
    }, {
      test: /\.scss$/,
      loaders: 'sass',
      loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap!toolbox'
    }, {
      test: /\.css$/,
      loaders: 'style!css'
    }, {
      test: /\.(jpe?g|png|gif)$/i,
      loaders: [
        'url?hash=sha512&digest=hex&name=images/[hash].[ext]',
        'image-webpack?bypassOnDebug=true&optimizationLevel=7&interlaced=false'
      ]
    }]
  }
};
