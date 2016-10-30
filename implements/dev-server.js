var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var webpackConfig = require('./webpack.dev.conf');

var host = (process.env.HOST || 'localhost');
var port = (+process.env.PORT + 1) || 3001;

new WebpackDevServer(webpack(webpackConfig), {
  contentBase: './static',
  publicPath: webpackConfig.output.publicPath,
  hot: true,
}).listen(port, host, function (err, result) {
  if (err) { return console.log(err); }
  console.log('Listening at http://' + host + ':' + port + '/');
});
