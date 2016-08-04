const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const postcss = require('./postcss')

// Returns absolute paths relative to the package root.
const root = (...args) => (
  path.join(process.cwd(), ...args)
)

// Returns true for paths that match our sources.
const ours = (absolute) => (
  absolute.startsWith(root('src'))
)

// Returns true for paths matching vendor sources.
const theirs = (absolute) => (
  !ours(absolute)
)

module.exports = {
  devtool: 'eval',
  target: 'web',
  watchOptions: {
    poll: true
  },
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://0.0.0.0:${process.env.PORT || 8080}`,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: root('dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  postcss,
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
      include: ours
    }],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: ours
    }, {
      test: /\.html$/,
      loader: 'nunjucks',
      include: ours
    }, {
      test: /\.css$/,
      loaders: 'style!css?sourceMap&modules!postcss',
      include: ours
    }, {
      test: /\.css$/,
      loaders: 'style!css?sourceMap',
      include: theirs
    }, {
      test: /\.(jpe?g|png|gif)$/i,
      loaders: [
        'url?hash=sha512&digest=hex&name=images/[hash].[ext]',
        'image-webpack?bypassOnDebug=true&optimizationLevel=7&interlaced=false'
      ],
      include: ours
    }]
  }
};
