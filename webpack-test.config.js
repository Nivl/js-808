'use strict';
/* eslint max-len: 0 */

const webpack              = require('webpack');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const ExtractTextPlugin    = require('extract-text-webpack-plugin');
const CleanWebpackPlugin   = require('clean-webpack-plugin');
const JasmineWebpackPlugin = require('jasmine-webpack-plugin');

const conf = {
  devtool: 'source-map',
  entry  : [`es6-shim/es6-shim.js`, `angular2/bundles/angular2-polyfills`, `${__dirname}/src/index.spec.ts`],
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
      { test: /\.scss$/, loaders: ['style', 'css?sourceMap!sass', 'sass'] },
      { test: /\.css$/, loaders: ['style', 'css?sourceMap!sass'] },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.wav$/, loader: 'file-loader?mimetype=audio/wav' },
      { test: /\.jpg$/, loader: 'file-loader?mimetype=image/jpg' },
      { test: /\.png$/, loader: 'file-loader?mimetype=image/png' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
    ],
  },
  plugins: [
    new JasmineWebpackPlugin('index.html'),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.spec.html`,
      minify  : false,
    }),
  ],
  devServer: {
    port              : 8080,
    historyApiFallback: true,
  },
};

module.exports = conf;
