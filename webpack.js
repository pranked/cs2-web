'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require("./webpack.config.js");
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8011/", "webpack/hot/dev-server");

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

server.listen(8011);