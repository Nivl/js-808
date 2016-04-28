
/* eslint max-len: 0 */

'use strict';

const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PROD = (process.env.NODE_ENV && process.env.NODE_ENV === 'production');

const conf = {
  devtool: 'source-map',
  entry  : [`es6-shim/es6-shim.js`, `angular2/bundles/angular2-polyfills`, `${__dirname}/src/main.ts`],
  output : {
    path    : `${__dirname}/dist`,
    filename: '[name].bundle.[hash].js',
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html'],
  },
  module: {
    loaders: [
      { test  : /\.ts$/, loader: 'ts-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.jpg$/, loader: 'url-loader?mimetype=image/jpg' },
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png' },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      minify  : (PROD) ? ({ removeComments: true, collapseWhitespace: true, minifyJS: true }) : (false),
    }),
  ],
  devServer: {
    port              : 8080,
    historyApiFallback: true,
  },
};

if (PROD) {
  // loaders
  conf.module.loaders.push({ test: /\.scss$/, loaders: ['style?amp', 'css', 'sass'] });
  conf.module.loaders.push({ test: /\.css$/, loaders: ['style?amp', 'css'] });
  // plugins
  conf.plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
} else {
  // loaders
  conf.module.loaders.push({
    test  : /\.scss$/,
    loader: ExtractTextPlugin.extract('style?amp', 'css?sourceMap!sass'),
  });
  conf.module.loaders.push({
    test  : /\.css$/,
    loader: ExtractTextPlugin.extract('style-loader?amp', 'css-loader?sourceMap'),
  });
  // plugins
  conf.plugins.push(new ExtractTextPlugin('styles.css'));
}

module.exports = conf;
