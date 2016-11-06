/* eslint-disable */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var webpackConfig = require('./webpack.dev.conf');

var host = (process.env.HOST || 'localhost');
var port = (+process.env.PORT) || 3000;

new WebpackDevServer(webpack(webpackConfig), {
  contentBase: './static',
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  progress: true,
  stats: {
  	colors: true,
  	timings: true,
  	chunks: false,
  },
}).listen(port, host, function (err, result) {
  if (err) { return console.log(err); }
  console.log('Listening at http://' + host + ':' + port + '/');
});
